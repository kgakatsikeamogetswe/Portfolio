import Image from 'next/image';
import blogImg from '../public/assets/projects/blog.png';
import React from 'react'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const blog = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image
            className='absolute z-1' layout='fill' objectFit='cover'
            src={blogImg}
            alt='blog image'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Nextjs Blog</h2>
                <h3>Nextjs/ Javascript/ MongoDB/ HTML & CSS </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Welcome to my Next.js blog! This project showcases my skills using Next.js for building a simple yet functional blog. I decided to create a blog to demonstrate my proficiency in Next.js and Firebase</p>
                <Link href='https://github.com/kgakatsikeamogetswe/blog-nextJS.git'>
                <button className='px-8 py-2 mt-4 mr-8'>
                    Code
                </button>
                </Link>
                <Link href='https://keamogetswe.vercel.app/'>
                <button className='px-8 py-2 mt-4 '>
                    Demo
                </button>
                </Link>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>Nextjs</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>Firebase</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/>HTML & CSS</p>
                        </div>
                    </div>
                </div>
                <Link  href='/#projects'>
                    <button className='px-8 py-2 mt-4 '>Back</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default blog