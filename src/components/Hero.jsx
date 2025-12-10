import React from 'react'
import { motion } from 'framer-motion'
// import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.div
        initial={{opacity:4, y:50}}
        WhileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='home'
        className='min-h-screen items-center flex pt-20 pb-16 bg-linear-to-r from-[#064E3B] via-[#464545] to-[#064E3B]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
              {/* Left Side */}
                <div className='md:1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font bold mb-4'>Hi! I'am <span className='text-amber-500 font-semibold'>MariaChohan</span>
                    </h1>
                    <h2 className='text-5xl md:4xl font:bold mb-4 typewriter'>Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'>I create stunning web Experiences with modern technologies and innovative design</p>
                    <div className='flex space-x-4'>
                      <a href="#projects" className='px-6 py-3 bg-amber-600 rounded-lg font-medium bor shadow-lg hover:bg-amber-500 transition duration-300'>View Work</a>
                      <a href="#contact" className='px-6 py-3 border-2 border-amber-600 rounded-lg font-medium shadow-lg  hover:bg-amber-500 transition decoration-amber-300'>Contact me</a>
                    </div>
                </div>

             {/* Right Side */}
            <div className='md:w-1/2 flex justify-center'>
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
            </div> 
      </div>
     </motion.div>
    
    
  )
}

export default Hero
