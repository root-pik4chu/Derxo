import React from 'react'
import AnimatedButton from './OtherComponents/AnimatedButton'
import ScrollingSwiper from './OtherComponents/ScrollingSwiper'
import NavBar from './OtherComponents/NavBar'
import { FaShoppingBag } from "react-icons/fa";
import absImg from "../../assets/Vector89.svg"
import { motion } from 'framer-motion';

const PageOne = () => {
  return (
    <>
      <motion.div className='w-full h-screen bg-[#EBF9EB] flex-col gap-10 overflow-hidden relative'
      
      initial={{  opacity:0}}
      animate={{ opacity:1}}
      transition={{ duration: 1.5, ease:'backInOut' }}
      exit={{}}

      >


      <img className='absolute z-0 top-0 left-[70%] ' src={absImg} alt="" />
        <NavBar />
        <div className="w-full h-[50vh] relative top-[2vw]   flex justify-between items-center pl-[2vw] ">
        <div className="heading text-[5vw] w-[50%] leading-none z-20 overflow-hidden">
          
          <h1 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut"}}
                viewport={{once:true}}
                className="inline-block "
              >
                <span className='text-orange-600 font-semibold'>10,000+ </span>Medicines,

              </motion.span>
              </h1>
              <h1 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1 ,ease:"backInOut" , delay:0.1}}
                viewport={{once:true}}
                className="inline-block"
              >
                 One Trusted Source

              </motion.span>
              </h1>
        </div>

    {/* ----------- */}


    {/* {
          ["No more inflated agency fees. No more flaky","freelancers. No more salaried employees to","manage. Just top-tier creative that’s easy,","Get transformational talent and capabilities","in a turnkey platform that promises your","brand will be Better Off®."].map((item, index)=>{
            return(
              <p className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1}}
                viewport={{once:true}}
                className="inline-block"
              >
                {item}

              </motion.span>
              </p>
            )

          }) */}

{/* -------------- */}
        <div className="smallDiv  pr-[2vw] z-20">
          {
            [
              { percentage: "80%", text: "Repeat Order" },
              { percentage: "3,00,000+", text: "Deliveries: Completed till date" },
              { percentage: "12+", text: "Countries: Presence worldwide" }
          ].map((item , index)=>{
              // console.log(item);
              return <div className="flex p-[.5vw] gap-[.5vw]">
            
              <div className="  text-2xl ">
              

              <h1 className="overflow-hidden">
                <motion.span
                initial={{y:"135%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: index*0.1}}
                viewport={{once:true}}
                className="inline-block"
              >
                <FaShoppingBag />

              </motion.span>
              </h1>


              </div>
              <div className="two ">
                  <div className="text-2xl">
                  <h1 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: index*0.1}}
                viewport={{once:true}}
                className="inline-block"
              >
                {item.percentage}

              </motion.span>
              </h1>
                  </div>
                  <div className="">
                  <h1 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: index*0.1}}
                viewport={{once:true}}
                className="inline-block"
              >
                {item.text}

              </motion.span>
              </h1>
                    </div>
              </div>
          </div>
              
          })
          }

          
          
          
        </div>
        </div>
        <ScrollingSwiper />
        <div className="w-full flex items-center justify-center relative top-[4vw]">
        <AnimatedButton />
        </div>
   
    </motion.div>
    </>
    
  )
}

export default PageOne
