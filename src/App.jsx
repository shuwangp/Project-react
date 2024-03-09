import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 import Navbar from './Component/NavBar/NavBar'
 import Hero from './Component/Hero/Hero'
 import Skills from './Component/Skills/Skills'
 import Services from './Component/Services/Services'
 import Portfolio from './Component/Portfolio/Portfolio'
 import Number from './Component/Number/Number'
 import Testimonials from './Component/Testimonials/Testimonials'
 import Contact from './Component/Contact/Contact'
 import Footer from './Component/Footer/Footer'
 import AnimatedCursor from "react-animated-cursor"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Navbar/>
    <Hero/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Number/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
