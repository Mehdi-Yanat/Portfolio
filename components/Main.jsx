import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div style={{background:"#252734"}} id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-500'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Mehdi</span>
          </h1>
          <h1 className='py-2 text-gray-500'>Full-Stack Developer</h1>
          <p className='py-4 text-gray-400 sm:max-w-[70%] m-auto'>
            I’m focused on building both backend and frontend web application
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              style={{color:"#5651e5"}}
              href='https://www.linkedin.com/in/mehdi-yanat-aba71a213/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              style={{color:"#5651e5"}}
              href='https://github.com/Mehdi-Yanat'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div style={{color:"#5651e5"}}  className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/mehdi-CV.pdf'>
              <div style={{color:"#5651e5"}}  className='rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
