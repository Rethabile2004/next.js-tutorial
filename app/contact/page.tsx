import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
    return (
        <>
        <div>

        <div className='mb-2'>ContactPage</div>
    <Link href='/contact/info' className='hover:text-white hover:bg-amber-300 px-2 py-3 bg-emerald-700 text-black rounded-md'>Go to get more infor</Link>
        </div>
    </>

  )
}

export default ContactPage