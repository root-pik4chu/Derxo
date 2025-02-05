import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import "./ScrollingSwiper.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination ,Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';


const ScrollingSwiper = () => {

  const data = [
    { head: "Sexual Health", med: "Abiraterone Acetate", low: "(Generic For Zytiga)" },
    { head: "Cancer Treatment", med: "Abiraterone Acetate", low: "(Generic For Zytiga)" },
    { head: "Heart Health", med: "Atorvastatin", low: "(Generic For Lipitor)" },
    { head: "Diabetes Care", med: "Metformin", low: "(Generic For Glucophage)" },
    { head: "Pain Relief", med: "Ibuprofen", low: "(Generic For Advil)" },
    { head: "Mental Health", med: "Sertraline", low: "(Generic For Zoloft)" },
    { head: "Respiratory Health", med: "Albuterol", low: "(Generic For Ventolin)" },
    { head: "Bone Health", med: "Alendronate", low: "(Generic For Fosamax)" },
    { head: "Gastrointestinal Health", med: "Omeprazole", low: "(Generic For Prilosec)" },
  ];

  return (
    <div>
      <div className="w-[100vw] h-[22vh] px-10">
      <Swiper
      slidesPerView={5.5}
      spaceBetween={30}
        pagination={{
          // clickable: true,
          dynamicBullets: true,
        }}
      
        
        className="mySwiper "
      >
        {

          data.map((item , index)=>{
            return <SwiperSlide><div className="Slide_1 w-full h-full rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white">
            
            <h1 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: 0.1}}
                viewport={{once:true}}
                className="inline-block text-[1.3vw] font-semibold text-green-900"
              >
                {item.head}

              </motion.span>
              </h1>

          
            <h2 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: 0.2}}
                viewport={{once:true}}
                className="inline-block text-[1.1vw]"
              >
                {item.med}

              </motion.span>
              </h2>

            
            <h3 className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: 0.3}}
                viewport={{once:true}}
                className="inline-block text-[1vw] text-red-500"
              >
                {item.low}
              </motion.span>
              </h3>

          </div>
          </SwiperSlide>
          })
        }
        
          
      </Swiper>
      </div>
    </div>
  )
}

export default ScrollingSwiper
