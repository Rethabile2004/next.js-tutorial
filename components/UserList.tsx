import { fetchUsers } from "@/app/actions/actions"
import type { User } from '@/app/actions/actions'

const UserList = async () => {
    const users: User[] = await fetchUsers()
    if (users.length === 0) {
        return <h1>no registered users found...</h1>
    }
    return (
        <section className="mt-3">
            <div className="mx-auto w-2xl bg-white rounded border-grey-300 shadow flex flex-col gap-3 px-4 py-2">
                <h1 className="text-3xl border-b p-2">Registered Users</h1>
                {users.map((user) => {
                    return <h1 className="hover:text-gray-700" key={user.id}>{user.firstName}</h1>
                })}
            </div>
        </section>
    )
}

export default UserList