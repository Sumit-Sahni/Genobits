import React from 'react'
import SideNavbar from "../NavigationBar/SideNavbar";
import Alldivisions from "../AllDivisions/Alldivisions"
import AdddDivision from "../AddDivisions/AddDivision"
import { MdOutlineCircleNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';



const MainScreen = () => {
  return (
      <section className='grid md:grid-cols-1 lg:grid-cols-6'>
             <div className='h-50 lg:h-[90vh]'>
                  <SideNavbar/>
             </div>

              {/* Division Section */}
             <div className=' col-span-5 flex flex-col '>

                 <div className=' flex  lg:flex-row items-center justify-between py-4 '>
                     <div className='text-xl md:text-3xl px-8'>
                        <h1>My Apps &gt; Client &gt; <span className='text-pink-800 font-medium'>Sites</span></h1>
                     </div>
                     <div>
                      <div className=' w-64 flex justify-evenly items-center'>
                         <MdOutlineCircleNotifications size={30}/>
                        <CgProfile size={30}/>
                      </div>
                       
                     </div>
                 </div>
                 {/* All Division  */}
                   <div className=' lg:text-3xl p-4 bg-blue-100'>
                     <h1 className='font-semibold'> &larr; Century &gt; <span className='text-teal-500'>Divisions</span> </h1>
                   </div>
                      <div className=' grid lg:grid-cols-7 bg-blue-100'>
                          <div className='lg:w-full  col-span-4 h-auto flex flex-wrap gap-6 p-4 '>
                            <Alldivisions/>
                          </div>
                          <div className='lg:w-full  col-span-2 flex justify-center '>
                               <AdddDivision/>
                          </div>
                      </div >
                    
              </div>
      </section>
  )
}


export  default MainScreen;