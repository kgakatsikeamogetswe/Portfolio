import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';



const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Contact</p>
            <h2 className='py-4'>Where can you connect with me?</h2>
            <div className='grid lg:grid-cols-5 gap-8'></div>
            {/**left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300' src="/assets/connect.jpg" alt="/" />
                    </div>
                    <div>
                        <h2 className='py-2'>Keamogetswe</h2>
                        <p>Front-End Developer</p>
                        <p className='py-4'>I am available anytime for any role</p>
                    </div>
                </div>
                <div>
                    <p className='uppercase pt-8 '>Connect with me</p>
                    <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                            <FaLinkedin/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-100 ease-in duration-100'>
                            <BsFillPersonLinesFill/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            {/**right */}

            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact