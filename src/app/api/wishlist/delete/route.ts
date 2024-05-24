import Wishlist from "@/db/models/wishlist";

export async function DELETE(request: Request) {
   try {
      const productId = await request.json();
      const userId = request.headers.get("x-id-user") as string;
      const result = await Wishlist.delete(productId, userId);

      return Response.json(result);
   } catch (error) {
      console.log(error);
      return Response.json({
         error,
         message: "Internal server error",
      },{
         status: 500
      });
   }
}
