import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3  '>
                <Link href='/'>
                <Image src={assets.logo} width={120} alt='' />
                </Link>
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 '>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addProduct' className='flex items-center border border-slate-100 gap-3 font-md px-3 py-2 bg-slate-200 shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} alt='' width={28} />
                        <p>Add Blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className='mt-5 flex items-center border border-slate-100 gap-3 font-md px-3 py-2 bg-slate-200 shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.blog_icon} alt='' width={28} />
                        <p>Blog List</p>
                    </Link>
                    <Link href='/admin/Subscriptions' className='mt-5 flex items-center border border-slate-100 gap-3 font-md px-3 py-2 bg-slate-200 shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.email_icon} alt='' width={28} />
                        <p>Subscriptions</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar