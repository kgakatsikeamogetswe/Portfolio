import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from "next/link";


const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5b5b5b]'>Contact</p>
            <h2 className='py-4'>Where can you connect with me?</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
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
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                            </div>
                            
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Link className='flex justify-center py-12' href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-100 ease-in duration-100'>
                        <HiOutlineChevronDoubleUp className='text-[#333333]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact