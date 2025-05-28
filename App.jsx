import { useState } from 'react'

import './App.css'
import "./index.css"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Kontakta } from './components/sections/Kontakta';
import { Hem } from './components/sections/Hem';
import { Dataskydd } from './components/sections/Dataskydd';
import { Footer } from './components/sections/Footer';
import { Bouppteckning } from './components/sections/Bouppteckning';
import { Avvittring } from './components/sections/Avvittring';
import { USP } from './components/sections/USP';
import { FAQ } from './components/sections/FAQ';


function App() {

  const [menuOpen, setMenuOpen] =  useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Hem/>
      <USP/>
      <Bouppteckning/>
      <Avvittring/>
      <FAQ/>
      <Kontakta/>
      <Dataskydd/>
      <Footer/>
    </>
  )
}

export default App
