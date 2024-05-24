
import User from "@/db/models/user";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, username, email, password } = body;

    await User.register({ name, username, email, password });

    return Response.json({ message: "User resgistered successfully." });
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessages = error.issues.map((item) => {
        return item.path[0] + ": " + item.message;
      });

      return Response.json(
        {
          error: errorMessages,
        },
        { status: 400 }
      );
    } else if (
      error instanceof Error
    ) {
      return Response.json(
        {
          error: error.message,
        },
        { status: 400 }
      );
    } else {
      return Response.json(
        {
          error: "Internal server error",
        },
        { status: 500 }
      );
    }
  }
}