import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { AiOutlineCloseSquare} from 'react-icons/ai';

const Form = ({visible, close}) => {
  const  [ DivisionName,  setDivisionName ] = useState("")
  const  [ Incharge, setIncharge] = useState("")
  const  [ InchargeEmail, setInchargeEmail] = useState("")
  const  [ TotalEmployee, setTotalEmployee] = useState("")

    if(!visible) return null;

   
    const SubmitHandler = async(e) =>{
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
           
             const {data} = await axios.post('/api/create',
              {
                  DivisionName,
                  Incharge,
                  InchargeEmail,
                  TotalEmployee  
              },
              config
              
              );
              console.log(data)
              alert("Added")
        } catch (error) {
            console.log(error)
        }
       setDivisionName("")
       setIncharge("")
       setInchargeEmail("")
       setTotalEmployee("")

    } 

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
               <div className='w-full h-[27rem] md:w-4/5 md:h-[19rem] relative'>
                <AiOutlineCloseSquare onClick={close} size={40} className='text-white absolute right-12 top-[-2.5rem]  cursor-pointer'></AiOutlineCloseSquare>
                    <div className='w-full mx-auto  bg-slate-50 h-full rounded-2xl'>
                          <div className='text-xl px-4 py-4' ><h1>Add New Division</h1></div>
                          <hr/>
                          <form className='px-4 py-2' onSubmit={SubmitHandler}>
                              <label htmlFor="">Division Name</label><br/>
                              <input
                                 type="text"
                                 placeholder='Division Name'
                                 className='w-48 p-2 rounded-xl bg-indigo-200 text-white '
                                 onChange={(e)=>setDivisionName(e.target.value)}
                                 value={DivisionName}
                               /><br/>
                             
                                  <div className='md:w-2/3  md:flex justify-between gap-6 py-4'>
                                         <div>
                                            <label htmlFor="">Incharge</label><br/>
                                            <input
                                               type="text"
                                               placeholder='Incgarge'
                                               className='w-48 p-2 rounded-xl bg-indigo-200 text-white '
                                               onChange={(e)=>setIncharge(e.target.value)}
                                               value={Incharge}
                                             />
                                         </div>

                                         <div>
                                          <label htmlFor="">Incharge E-mail ID</label><br/>
                                            <input
                                               type="email"
                                               placeholder='Enter E-mail ID'
                                               className='w-48 p-2 rounded-xl bg-indigo-200 text-white '
                                               onChange={(e)=>setInchargeEmail(e.target.value)}
                                               value={InchargeEmail}
                                             />
                                             
                                         </div>

                                         <div>
                                         <label htmlFor="">Total Employee Working</label><br/>
                                            <input
                                               type="number"
                                               placeholder='Number'
                                               className='w-48 p-2 rounded-xl bg-indigo-200 text-white z-10'
                                               onChange={(e)=> setTotalEmployee(e.target.value)}
                                               value={TotalEmployee}
                                             />
                                        </div>   
                                 </div> 
                               <div className=' w-full relative'>
                                       <div className='absolute right-0 mb-6'>
                                        <button className='mx-12'>Cancle</button>
                                        <button type='submit'  className='bg-orange-500 text-white font-medium text-1xl w-40 py-2 rounded-1xl my-4 rounded' >Add</button>
                                       </div>
                               </div>
                          </form>
                    </div>
               </div>
    </div>
  )
}

export default Form;