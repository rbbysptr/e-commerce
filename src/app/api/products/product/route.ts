import Products from "@/db/models/product";

export async function GET(request: Request) {
  try {
    const result = await Products.getProductPreview();

    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
