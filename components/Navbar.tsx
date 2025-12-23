import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-x-6 items-center w-screen bg-indigo-300 px-21 py-5 mx-auto">
        <h1 className="text-xl font-bold hover:text-white cursor-pointer text-indigo-800">Website</h1>
        <div className="flex gap-x-6 items-center max-w-3xl bg-indigo-300 ">
        <Link className='text-lg hover:text-indigo-600 cursor-pointer' href='/'>Home</Link>
        <Link className='text-lg hover:text-indigo-600 cursor-pointer'href='/contact'>Contact</Link>
        <Link href='/counter'className='text-lg hover:text-indigo-600 cursor-pointer'>Counter</Link>
        <Link href='/tours' className='text-lg hover:text-indigo-600 cursor-pointer'>Tours</Link>
        <Link href='/actions' className='text-lg hover:text-indigo-600 cursor-pointer'>Actions</Link>

        </div>
    </nav>
  )
}

export default Navbar