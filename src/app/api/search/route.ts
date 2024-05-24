import Products from "@/db/models/product";



export async function GET(request: Request) {
  try {
    const search = request.url.split("?")[1].split("=")[1];
    const result = await Products.getProductByName(search);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
