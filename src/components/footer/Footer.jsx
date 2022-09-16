import React from 'react'
import './footer.css'
import{ImFacebook2} from 'react-icons/im'
import{BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
   <footer>
    {/* // eslint-disable-next-line */}
    <a href="#" className='footer__logo'>DEV-CODER</a>
    <ul className="permanent__links">
    <li><a href="#">Home</a></li>
    <li><a href="#abouta">about</a></li>
    <li><a href="#experience">experience</a></li>
    <li><a href="#portfolio">portfolio</a></li>
    <li><a href="#contacts">contacts</a></li>
    </ul>
    
    <div className="footer__socials">
      <a href="https://facebook.com"><ImFacebook2/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy;RAHUL KUMAR PORTFOLIO . All Rights Reserved</small>
    </div>
   </footer>
  )
}

export default Footer
