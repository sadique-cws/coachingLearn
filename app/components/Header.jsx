"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Header = () => {
    const router = useRouter()
  return (
    <nav className='bg-teal-600 text-white flex-1 flex px-3 py-2 justify-between'>
    <h1 onClick={() => router.push("/")} className='text-white text-3xl font-semibold cursor-pointer'>Coaching App</h1>

    <div className='flex gap-3'>
        <Link href="/admin" className="bg-teal-500 text-white px-3 py-2 rounded">Go at Admin Panel</Link>
        <Link href="/admin/students" className="bg-teal-500 text-white px-3 py-2 rounded">Student</Link>
        <Link href="/dashboard/settings" className="bg-teal-500 text-white px-3 py-2 rounded">Setting</Link>
        <Link href="/dashboard/settings/profile" className="bg-teal-500 text-white px-3 py-2 rounded">Profile</Link>
    </div>
</nav>
  )
}

export default Header