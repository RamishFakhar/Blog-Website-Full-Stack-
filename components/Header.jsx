'use client';
import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, {useState} from 'react'
import { toast } from 'react-toastify';

const Header = () => {

  const [email,setEmail] = useState("");

const onSubmitHandler = async (e)=>{
e.preventDefault();
const formData = new FormData();
formData.append("email",email);
const response = await axios.post('/api/email',formData);
if (response.data.success) {
  toast.success(response.data.msg);
  setEmail("");
} 
else {
toast.error("Error")  
}
}

  return (
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
    <div className='flex justify-between items-center'>
        <Image src={assets.logo} alt='' width={180}  className='w-{130px} sm:w-auto' />
        <Link href='/admin'>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] active:bg-gray-600 active:text-white '>Admin <Image src={assets.arrow} alt='' /></button>
        </Link>
    </div>
    <div className='text-center my-8'>
<h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs </h1>
<p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    <form onSubmit={onSubmitHandler} className=' flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='bg-gray-200 pl-4 outline-none' />
      <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
    </form>
    </div>
    
    </div>
  )
}

export default Header;