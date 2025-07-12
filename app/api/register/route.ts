import prisma from "@/lib/prisma";


export async function POST(request: Request) {

    const body = await request.json();

    await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            username: body.username,
        }
    });


    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}