import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#sobremi" onClick={() => setActiveNav('#sobremi')} className={activeNav === '#sobremi' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#portafolio" onClick={() => setActiveNav('#portafolio')} className={activeNav === '#portafolio' ? 'active' : ''}><BiBook/></a>
      <a href="#contacto" onClick={() => setActiveNav('#contacto')} className={activeNav === '#contacto' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav