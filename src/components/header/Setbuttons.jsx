import React from 'react'
import CV from '../../assests/CV.pdf'
const Setbuttons = () => {
  return (
    <div className='setbtn'>
        <a href={CV}download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Lets Talk</a>
      
    </div>
  )
}

export default Setbuttons
