export async function GET(request: Request) {
    return Response.json({
        message: "Hello World"
    },{
        status: 200
    })
}