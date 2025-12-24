'use client'
import { createUser } from '@/app/actions/actions'
import { log } from 'console'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

 function  SubmitButton() {
    // 'use client'
    const { pending } = useFormStatus()
    // const users=await fetch('api/users')
    // console.log(users);
    
    return (
        <button type='submit' className='bg-blue-500 rounded border-none py-3 text-white hover:bg-blue-700' disabled={pending}>{pending ? 'submitting...' : 'submit'}</button>
    )
}
const Form = () => {
    return (
        <div>
            <form action={createUser} className='max-w-lg flex flex-col gap-4 bg-white rounded shadow p-6 mx-auto mt-3'>
                {/* {message&&<p>{message}</p>} */}
                <h2 className=' align capitalize'>Please enter your information</h2>
                <input type="text" name='firstName' defaultValue='rethabile' className='rounded border px-2 py-3 text-gray-600 shadow' />
                <input type="text" name='lastName' defaultValue='siase' className='rounded border px-2 py-3 text-gray-600 shadow' />
                <SubmitButton />
            </form>

        </div>
    )
}

export default Form