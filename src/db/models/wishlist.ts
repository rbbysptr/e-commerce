import { z } from "zod";
import { getCollection } from "../config";
import { Wishlist } from "@/app/interface";
import { ObjectId } from "mongodb";

type zWishlist = z.infer<typeof wishlistSchema>;

const wishlistSchema = z.object({
  userId: z.string().min(1),
  productId: z.string().min(1),
});

export default class Wishlists {
  static collection() {
    return getCollection("Wishlists");
  }

  static async addToWishlist(productId: string, userId: string) {
    const inputWishList: zWishlist = { productId, userId };
    wishlistSchema.parse(inputWishList);

    const newWishlist: Wishlist = {
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.collection().insertOne(newWishlist);

    return { message: "Success add product to wishlist" };
  }

  static async findAllWishlist(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(String(userId)),
        },
      },
      {
        $group: {
          _id: "$productId",
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "_id",
          foreignField: "_id",
          as: "detail",
        },
      },
      {
        $unwind: {
          path: "$detail",
        },
      },
    ];

    const wishlist = await this.collection().aggregate(agg).toArray();

    return wishlist;
  }

  static async delete(productId: string, userId: string) {
    await this.collection().deleteOne({
      productId: new ObjectId(String(productId)),
      userId: new ObjectId(String(userId)),
    });

    return { message: "Product from wishlist has been deleted" };
  }
}
