import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div>
        <motion.div
              initial={{opacity:4, y:50}}
                     WhileInView={{opacity:1, y:0}}
                     transition={{duration:0.6, ease:'easeOut'}}
                     viewport={{once: true}}
                     id='projects'
                     className='py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]'
                      >
                          <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                            {/* Left Side */}
                              <div className='container mx-0 px-6 text-center'>
                                  <h1 className='text-4xl font-bold text-white mb-4 mt-4'>My <span className='text-amber-500 font-semibold'>Projects</span>
                                  </h1>
                                  <p className='text-xl'>A selection of my recent work</p>
                                  </div>
                   </div>
                  </motion.div>
                 
                 </div>
  )
}

export default Projects
