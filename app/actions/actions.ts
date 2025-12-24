'use server'

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
}

const USERS_FILE = 'users.json'

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const result = await readFile(USERS_FILE, 'utf-8')
        return result ? JSON.parse(result) : []
    } catch {
        return []
    }
}

export const saveUser = async (user: User) => {
    const users = await fetchUsers()
    users.push(user)
    await writeFile(USERS_FILE, JSON.stringify(users, null, 2))
}

export const createUser = async (formData: FormData) => {
    'use server';
    revalidatePath('/actions');
    try {
        const firstName = formData.get('firstName') as string
        const lastName = formData.get('lastName') as string
        const newUser: User = {
            id: Date.now().toString(),
            firstName,
            lastName
        }
        saveUser(newUser);
        // return 'user created successfully'

    } catch (error) {
        // return 'failed to create a user'
    }
}

export const deleteUser = async (id:string,formData: FormData) => {
    'use server'
    // const id = formData.get('id') as string

    const users = await fetchUsers()
    const newUsers=users.filter((user) => user.id !== id);
    await writeFile(USERS_FILE, JSON.stringify(newUsers, null, 2))
    revalidatePath('/actions');
}