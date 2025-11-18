import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
      {/* <motion.div
              
                      initial={{opacity:4, y:50}}
                      WhileInView={{opacity:1, y:0}}
                      transition={{duration:0.6, ease:'easeOut'}}
                      viewport={{once: true}}
                      id='about'
                      className='py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]'
                      >
                          <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                            {/* Left Side */}
                              {/* <div className='container mx-0 px-6 text-center'>
                                  <h1 className='text-4xl font-bold text-white mb-4 mt-4'>About <span className='text-amber-500 font-semibold'>Me</span>
                                  </h1>
                                  <p className='text-xl'>Get to know more about my background and passion</p>
                                  </div>
                    </div>
                   </motion.div> */} 
                  
           <motion.div
                   initial={{opacity:4, y:50}}
                   WhileInView={{opacity:1, y:0}}
                   transition={{duration:0.6, ease:'easeOut'}}
                   viewport={{once: true}}
                   id='about'
                  className='py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]'
                      >
                          <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                            {/* Left Side */}
                            <div className='container mx-0 px-6 text-center'>
                                  <h1 className='text-4xl font-bold text-white mb-4 mt-4'>About <span className='text-amber-500 font-semibold'>Me</span>
                                  </h1>
                               
                               <p className='text-lg text-gray-300 mb-8'>Get to know more about my background and passion</p>
                               
                           </div>
           
                        {/* Right Side */}
                       {/* <div className='md:w-1/2 flex justify-center'>
                             <div className='relative w-64 h-64 md:w-80 md:h-80'>
                                   <div className='absolute inset-0 rounded-full bg-linear-to-r from-[#064E3B] to-[#464545] opacity-70'>
                                   <motion.img
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{duration: 4,
                                     repeat: Infinity,
                                     repeatType: 'loop',
                                     ease: 'easeInOut'
                                    }}         
                                   className='relative rounded-full w-64 h-64  border-amber-500 border-2  md:w-80 md:h-80 object-cover z-10 animate-float'
                                   src={'/src/assets/maria.jpeg'} alt="profile" />
                                   </div>
                             </div>
                       </div>  */}
                 </div>
                </motion.div>   
                    
           </div>
  )
}

export default About
