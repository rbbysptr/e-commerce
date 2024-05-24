import Products from "@/db/models/product";

type RequestParam = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, { params }: RequestParam) {
  try {
    const product = await Products.findBySlug(params.slug);
    return Response.json(product);
  } catch (error) {
    return Response.json(error);
  }
}
