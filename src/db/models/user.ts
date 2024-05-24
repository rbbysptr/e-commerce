import { db } from "../config";
import { z } from "zod";
import { InputLogin } from "@/app/api/users/login/route";
import { hashPassword } from "@/helpers/bcryptjs";

const userSchema = z.object({
  name: z.string().min(5),
  username: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(5),
});

const UserLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot empty" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password cannot empty" }),
});

type User = z.infer<typeof userSchema>;

export default class Users {
  static userCollection() {
    return db.collection<User>("Users");
  }

  static async findAll() {
    return await this.userCollection().find().toArray();
  }

  static async getUserByEmail(email: string) {
    const userCollection = this.userCollection()
    const data = await userCollection.findOne({ email: email })
    return data;
  }


  static async register(newUser: User) {
    userSchema.parse(newUser);

    const isEmailUniqueValid = await this.userCollection().findOne({
      email: newUser.email,
    });
    const isUsernameUniqueValid = await this.userCollection().findOne({
      username: newUser.username,
    });

    if (isEmailUniqueValid) {
      throw new Error("Email must be unique.");
    }

    if (isUsernameUniqueValid) {
      throw new Error("Username must be unique.");
    }

    return await this.userCollection().insertOne({
      ...newUser,
      password: hashPassword(newUser.password),
    });
  }

  static async login(inputLogin: InputLogin) {
    const parseResult = UserLoginSchema.safeParse(inputLogin);
    if (!parseResult.success) {
      throw parseResult.error;
    }

    return await this.userCollection().findOne({ email: inputLogin.email });
  }
}