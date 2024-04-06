import React from 'react'

const Contact = () => {
   const handleSubmit = (e) => {
e.preventDefault;
    }
  return (
    <div className='p-20 border'>
        <div className='md:w-[50%] w-full mt-40 m-auto flex items-center justify-center'>
<form className='w-[100%]'>
    <label className='mt-2 mb-2'>Name</label>
    <br/>
    <input className='w-full border border-1 outline-none px-2 py-1' type="text" placeholder='Enter your name'/>
<br/>
<label className='mt-2 mb-2'>Email</label>
<br/>
    <input type="text" className='w-full border border-1 outline-none px-2 py-1' placeholder='Enter your email'/>
    <label>Message</label>
<br/>
    <input type="text" className='w-full h-28 border border-1 outline-none px-2 py-1' placeholder='Enter your message'/>
<button className='px-2 py-1 border mt-3 hover:bg-black hover:text-white' type="submit" onClick={handleSubmit}>Submit</button>
</form>
    </div>
    </div>
  )
}

export default Contact