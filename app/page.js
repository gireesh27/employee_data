import React from 'react';

export default function Home() {
  return (
    <div className=' mx-52 w-full h-ful overflow-y-hidden border-black'>
      <hr/>
      <h1 className='text-center text-4xl mx-auto mt-10 border-x-violet-600 px-12 rounded-xl '>Click on 
      <a href="https://employee-data-five.vercel.app/employees" className='font-bold text-green-700'> Open </a>
      </h1>
      <h2> <strong>"/employees"</strong>     is the navigated root for this project</h2>
      
      <h2 className='my-4'>open <strong> Github </strong> for this project 
        <a href='https://github.com/gireesh27/EdTech-website' className='text-lg'> 🔗 </a>
      </h2>
      <hr/>
      <div className=" flex flex-row space-x-5 bottom-full  right-0 font-serif font-extrabold text-base ">
      <div>Developed by </div>
      <div className='font-extrabold text-sky-700 '>Gireesh</div>
      </div>
    </div>
  );
}

