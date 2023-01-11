import React from 'react'
import CV from '../../archivos/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacto' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA