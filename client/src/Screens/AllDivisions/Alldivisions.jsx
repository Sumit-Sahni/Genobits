import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoEllipsisHorizontalSharp} from 'react-icons/io5';

 const Alldivisions = () => {
    const [Alldata, setAlldata] = useState([])


  
  useEffect(()=>{
    const getPost = async () =>{
    const {data} = await axios.get(`/api/get`);
      setAlldata(data);
      console.log(data)
    }
    getPost();
},[])

  return (
       <>
       {
        Alldata.map((item, index) =>{
          return(
     <div key={index} className='w-72 h-40 flex flex-col  border-b-4  rounded-b-2xl'>
                 <div className='flex items-center  justify-between p-2 bg-teal-500 border-t-4 rounded-t-2xl'>
                    <h1 className='lg:text-xl'>{item.divName}</h1>
                    <div>
                      <IoEllipsisHorizontalSharp/>
                    </div>
                </div>
                <div className='p-2 bg-white'>
                    <p className='py-1'>Incharge: {item.incharge}</p>
                    <p className='py-1'>E-mail Id: {item.inchargeEmail}</p>
                    <p className='py-1'>Total Employees: {item.totalEmployee}</p>
                </div>
         </div>
          )
        })
       }
         
        
       </>
  )
}


export default Alldivisions;