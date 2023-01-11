import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../archivos/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Matias Reales</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

{/*IMAGEN HEADER*/}
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contacto" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header