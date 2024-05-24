import Wishlist from "@/db/models/wishlist";

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-id-user") as string;
    const result = await Wishlist.findAllWishlist(userId);

    return Response.json({ data: result });
  } catch (error) {
    return Response.json({
      error: error,
      message: "Internal server error",
    },{
      status: 500
    });
  }
}
