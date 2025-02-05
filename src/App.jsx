import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageOne from './Components/Pages/PageOne'
import MouseFollower from './Components/MouseFollower/MouseFollower'
import AnimatedButton from './Components/Pages/OtherComponents/AnimatedButton'
import LocomotiveScroll from 'locomotive-scroll';
import PageTwo from './Components/Pages/PageTwo'
import ContactInfo from './Components/Pages/OtherComponents/ContactInfo'




const locomotiveScroll = new LocomotiveScroll();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MouseFollower />
    <div className="w-full h-full overflow-x-hidden font-[f2]">
       
     
    <ContactInfo />
      <PageOne />
      <PageTwo />
    </div>
    </>
  )
}

export default App
