import Users from "@/db/models/user";

export async function GET(request: Request) {
    try {
        const data = await Users.findAll();
        return Response.json({data});
      } catch (error) {
        return Response.json(error);
      }
}