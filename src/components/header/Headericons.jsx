import React from 'react'
import{AiOutlineLinkedin} from 'react-icons/ai'
import{BsGithub} from 'react-icons/bs'
const Headericons = () => {
  return (
    <div className='header__socials'>
        
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default Headericons
