import React from 'react'
import SideNavbar from "../NavigationBar/SideNavbar";
import Alldivisions from "../AllDivisions/Alldivisions"
import { MdOutlineCircleNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';



const MainScreen = () => {
  return (
      <section className='grid md:grid-cols-1 lg:grid-cols-6'>
             <div className='h-50 lg:h-[90vh]'>
                  <SideNavbar/>
             </div>

              {/* Division Section */}
             <div className=' col-span-5 outline-dashed flex flex-col '>

                 <div className=' flex flex-row items-center justify-between py-4 '>
                     <div className='text-xl md:text-3xl px-8'>
                        <h1>My Apps &gt; Client &gt; <span>Sites</span></h1>
                     </div>
                     <div>
                      <div className=' w-64 flex justify-evenly items-center'>
                         <MdOutlineCircleNotifications size={30}/>
                        <CgProfile size={30}/>
                      </div>
                       
                     </div>
                 </div>
                 {/* All Division  */}
                 <div className=' grid lg:grid-cols-6 outline'>
                     <div className='lg:w-full outline col-span-4 h-64'>
 

                     </div>
                     <div className='lg:w-screen outline-dashed '>


                     </div>
                 </div >
                    
              </div>
      </section>
  )
}


export  default MainScreen;