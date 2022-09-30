import React from 'react'
import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import Form from './Form';

const AddDivision = () => {
      const [showForm, setShowForm] = useState(false);
      const handleClose = () =>{
           setShowForm(false);
      }
  
  return (
    
    <section className='w-80 py-10 bg-slate-50 h-80 p-4  rounded-xl'> 
             <div onClick={() => setShowForm(true)}  className=' flex items-center justify-center rounded px-2 py-3 text-center bg-orange-500 text-white text-1 xl cursor-pointer'>
                <BsPlusLg style={{"color": "white"}}/>
                <button className='mx-3'>Add New Division</button>
             </div>
             <div className=''>
             <div className='bg-red w-full  p-4 pb'>
                  <h1 className='text-blue-800 lg:text-2xl pb-2'>Filters</h1>
                  <hr/>
                  <p className='pb-2'>By Location</p>
                   <input placeholder='Search by Location'/>
            </div>

            <div className='w-full flex justify-center'>
                <button className='bg-yellow-500 text-white font-medium text-1xl w-40 py-2 rounded-1xl my-4' >Apply</button>
            </div>
             </div>
              
              <Form visible={showForm} close={handleClose}/>
    </section>
  )
}


export  default AddDivision;