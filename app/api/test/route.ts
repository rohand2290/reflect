export async function POST(request: Request) {

    const body = await request.json();

    const respObj = {
        answer: (body.answer) / 2
    }

    return new Response(JSON.stringify(respObj), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}
