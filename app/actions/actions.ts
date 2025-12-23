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

export const fetchUsers = async () => {
    try {
        const result = await readFile(USERS_FILE, 'utf-8')
        return result ? JSON.parse(result) : []
    } catch {
        return []
    }
}

const saveUser = async (user: User) => {
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