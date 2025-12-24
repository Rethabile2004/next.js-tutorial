import { deleteUser, fetchUsers } from "@/app/actions/actions"
import type { User } from '@/app/actions/actions'
import DeleteButton from "./DeleteButton"



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

                    return <main key={user.id} className="flex justify-between">
                        <h1 className="hover:text-gray-700" >{user.firstName} {user.lastName}</h1>
                        <DeleteButton id={user.id} />
                    </main>
                })}
            </div>
        </section>
    )
}

export default UserList