import React from 'react'
import { CgMenuGridO } from 'react-icons/cg';
import { BsFillPeopleFill} from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { CgLogOut } from 'react-icons/cg';

 const SideNavbar = () => {
  return (
    <section className='h-full flex flex-wrap flex-col  lg:flex-col lg:justify-between '>
            <div className='flex h-48 justify-between lg:items-center flex-col lg:flex-col '>
                 <div className='flex px-4 py-4 lg:items-center flex-col lg:py-12'>
                    <h1 className='text-xl md:text-4xl font-extrabold'>CAIT</h1>
                    <p className='text-xl font-bold'>EDUSYS PVt. Ltd</p>
                 </div>
                 <div className=' flex items-center px-4  py-2 w-48  text-orange-500 shadow-lg shadow-black-500/50  self-start'>
                  <div className='bg-orange-500 h-full w-1  '></div>
                    <CgMenuGridO size={20} style={{"marginLeft":"6px"}}/>
                    <h1 className='mx-2 md:text-xl'>My Apps</h1>
                 </div>
                 <div  className=' flex items-center px-4  w-48 lg:my-6'>
                    <BsFillPeopleFill size={20}/>
                    <h1  className='mx-2 md:text-xl'>Resources</h1>
                 </div>
            </div>

            <div className='flex lg:flex-col h-40 items-center justify-between'>
              <div  className=' flex  items-center px-4 w-48 '>
                <AiOutlineHome size={20}/>
                <h1  className='mx-2 md:text-xl'>My Org</h1>
              </div>
              <div  className=' flex  items-center px-4 w-48'>
                <FiSettings size={20}/>
                <h1  className='mx-2 md:text-xl'>Setting</h1>
              </div>
              <div  className=' flex  items-center px-4 w-48'>
                <CgLogOut size={20}/>
                <h1  className='mx-2 md:text-xl'>Logout</h1>
              </div>
            </div>
    </section>
  )
}


export default SideNavbar; 