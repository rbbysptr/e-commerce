import Wishlist from "@/db/models/wishlist";
import { redirect } from "next/navigation";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const productId = await request.json();
    const userId = request.headers.get("x-id-user") as string;

    const result = await Wishlist.addToWishlist(productId, userId);
    return Response.json(result);
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((item) => {
        return item.path[0] + " " + item.message;
      })

      return Response.json(
        {
          error: errors,
        },
        {
          status: 400,
        }
      );
    }

    console.log(error);
    if (error == "Invalid token") {
      redirect("/login");
    }
    return Response.json({ error });
  }
}
