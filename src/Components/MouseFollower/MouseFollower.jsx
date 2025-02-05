
import {useEffect } from 'react'
import {useTransform , useSpring , motion , useMotionValue} from 'framer-motion'


const MouseFollower = () => {

   const mouseX = useMotionValue(0)
   const mouseY = useMotionValue(0)

   const springX = useSpring(mouseX , {
       stiffness:60,
       damping: 10 ,
   })
   const springY = useSpring(mouseY , {
      stiffness:60,
      damping: 10 ,
  })


  useEffect(()=>{
   const handleMouseMove = (event)=>{
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
   }

   window.addEventListener("mousemove" , handleMouseMove);
   return ()=>{window.removeEventListener("mousemove" , handleMouseMove)}
  },[mouseX , mouseY])

 

  return (
    <>
      <div className="relative overflow-hidden z-20">
         <motion.div className="w-3 h-3 bg-green-900 rounded-full fixed top-0 left-0 pointer-events-none" style={{x :springX , y:springY}}></motion.div>
      </div>
    </>
  )
}

export default MouseFollower



