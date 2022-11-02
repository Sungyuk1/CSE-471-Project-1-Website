import React from 'react';
import {/*FaGithub, FaLinkedin,*/ FaTwitter, FaYoutube, FaFacebook, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const SocialLinks = () => {
  return (
    <div className="flex flex-row  bg-gradient-to-b via-black
    from-black to-gray-800  justify-end">
      {/**The links to the socials */}
        <div className="flex flex-row justify-end  pb-5 pr-10">
            <li className=" flex flex-row justify-between items-center w-15 h-14 px-4
                     hover:rounded-md duration-300">
                <a href={"https://twitter.com"} className='flex justify-between items-end w-full text-white' target='_blank' rel="noreferrer">
                <FaTwitter size={30}/>
                </a>
            </li>
            {/**<li className=" flex flex-row justify-between items-center w-15 h-14 px-4
                     hover:rounded-md duration-300">
                <a href={"https://github.com"} className='flex justify-between items-end w-full text-white' target='_blank' rel="noreferrer">
                <FaGithub size={30}/>
                </a>
            </li>*/}
            <li className=" flex flex-row justify-between items-center w-15 h-14 px-4
                     hover:rounded-md duration-300">
                <a href={"mailto:kwonsun7@msu.edu"} className='flex justify-between items-end w-full text-white' target='_blank' rel="noreferrer">
                <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className=" flex flex-row justify-between items-center w-15 h-14 px-4
                     hover:rounded-md duration-300">
                <a href={"https://www.youtube.com/"} className='flex justify-between items-end w-full text-white' target='_blank' rel="noreferrer">
                <FaYoutube size={30}/>
                </a>
            </li>
            <li className=" flex flex-row justify-between items-center w-15 h-14 px-4
                     hover:rounded-md duration-300">
                <a href={"https://www.facebook.com/"} className='flex justify-between items-end w-full text-white' target='_blank' rel="noreferrer">
                <FaFacebook size={30}/>
                </a>
            </li>
            <li className=" flex flex-row justify-between items-center w-15 h-14 px-4
                     hover:rounded-md duration-300">
                <a href={"https://www.instagram.com/"} className='flex justify-between items-end w-full text-white' target='_blank' rel="noreferrer">
                <FaInstagram size={30}/>
                </a>
            </li>

        </div>
  </div>
  )
}

export default SocialLinks