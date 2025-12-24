import { fetchUsers, saveUser, User } from "@/app/actions/actions";

export async function GET() {
    const users = await fetchUsers()

    return Response.json({ users })
}

export async function POST(request: Request) {
    const body = await request.json()
    // console.log(user);
    const newUser: User = {
        id: Date.now().toString(),
        ...body
    }
    await saveUser(newUser)
    return Response.json(newUser)
}