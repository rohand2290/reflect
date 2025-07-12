import prisma from "@/lib/prisma";


export async function GET(request: Request, 
    { params }: {params: Promise<{id: string}>}) {


    const { id } = await params;
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)}
    })
    


    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}