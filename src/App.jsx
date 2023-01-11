import React from 'react'
import Header from './componentes/header/Header'
import Nav from './componentes/nav/Nav'
import Sobremi from './componentes/sobremi/Sobremi'
import Portafolio from './componentes/portafolio/Portafolio'
import Contacto from './componentes/contacto/Contacto'
import Footer from './componentes/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Sobremi />
        <Portafolio />
        <Contacto />
        <Footer />
    </>
  )
}

export default App