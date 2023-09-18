import React from 'react'
import { AiFillGithub, AiOutlineDribbble, AiOutlineFacebook } from 'react-icons/ai'
import {FaLinkedinIn } from 'react-icons/fa'
import header from "./header.module.css";

export const HeaderSocial = () => {
  return (
    <div className={header.headerSocial}>
        <a className='view' href="//linkedin.com/in/abdul-mannan-332846231/" target="_blank"><FaLinkedinIn /></a>
        <a className='view' href="//github.com/MannanAnxari" target="_blank"><AiFillGithub/></a>
        <a className='view' href="//dribbble.com" target="_blank"><AiOutlineFacebook/></a>
    </div>
  )
}
