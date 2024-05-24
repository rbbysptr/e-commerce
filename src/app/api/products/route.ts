
import Products from "@/db/models/product";

export async function GET(request: Request) {
    try {
        const page = parseInt(request.url.split("?")[1].split("=")[1]) - 1;
        const result = await Products.findAll(Number(page));
        return Response.json(result);
     } catch (error) {
        console.log(error);
        return Response.json(error);
     } 
}