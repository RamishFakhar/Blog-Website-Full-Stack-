import { assets } from "@/Assets/assets";
import Sidebar from "@/components/admincomponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <div className='flex'>
                <ToastContainer theme="dark" />
                <Sidebar />
                <div className='flex flex-col w-full bg-slate-100'>
                    <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12   bg-slate-100'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt='' />
                    </div>
                    {children}
                </div>
            </div>


        </>
    )
}