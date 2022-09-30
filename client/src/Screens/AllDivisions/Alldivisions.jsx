import React from 'react'
import { IoEllipsisHorizontalSharp} from 'react-icons/io5';

 const Alldivisions = () => {
  return (
       <>
         <div className='w-72 h-40 flex flex-col  border-b-4  rounded-b-2xl'>
                <div className='flex items-center  justify-between p-2 bg-teal-500 border-t-4 rounded-t-2xl'>
                    <h1 className='lg:text-xl'>Cake Division</h1>
                    <div>
                      <IoEllipsisHorizontalSharp/>
                    </div>
                </div>
                <div className='p-2 bg-white'>
                    <p className='py-1'>Incharge: mnohar Patnaik</p>
                    <p className='py-1'>E-mail Id: sumit.123sahni@gmail.com</p>
                    <p className='py-1'>Total Employees: 10</p>
                </div>
         </div>
        
       </>
  )
}


export default Alldivisions;