import { deleteUser } from "@/app/actions/actions"

const DeleteButton = ({ id }: { id: string }) => {
    const removeUser = deleteUser.bind(null, id)

    return (
        <form action={removeUser}>
            {/* <input type="hidden" value={id} name='id' /> */}
            <button className="bg-purple-600 hover:bg-red-600 text-white p-2 rounded-md shadow cursor-pointer">
                delete</button>
        </form>
    )
}

export default DeleteButton