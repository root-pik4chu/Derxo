import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageOne from './Components/Pages/PageOne'
import MouseFollower from './Components/MouseFollower/MouseFollower'
import AnimatedButton from './Components/Pages/OtherComponents/AnimatedButton'

import PageTwo from './Components/Pages/PageTwo'
import ContactInfo from './Components/Pages/OtherComponents/ContactInfo'
import { ReactLenis, useLenis } from 'lenis/react'


function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  const [count, setCount] = useState(0)

  return (
    <>
    <ReactLenis root>
     <MouseFollower />
    <div className="w-full h-full overflow-x-hidden font-[f2]">
       
     
    <ContactInfo />
      <PageOne />
      <PageTwo />
    </div>
    </ReactLenis>
    </>
  )
}

export default App
