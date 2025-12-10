import React from 'react'
import {FaBars} from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
import { useState } from 'react'
const Navbar = () => {
// Function showmenu
const [showmenu, setshowmenu] = useState(false)

  
  return (
    <nav className='fixed w-full z-50 bg-emerald-950 backdrop-blur-sm py-4 px-8 shadow-lg '>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <a href="#" className='text-4xl font-bold text-white'>
            Maria 
            <span className='text-amber-500'>Chohan</span>
            </a> 
       </div>
       <div className='hidden md:flex space-x-10'>

        <a href="#home" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
          <span>Home</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>

          <a href="#about" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
          <span>About</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>

          <a href="#skills" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
          <span>Skills</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>

          <a href="#projects" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
          <span>Projects</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>

          <a href="#contact" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
          <span>Contact</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full'></span>
        </a>
        
       </div>
     
       {/* Mobile view */}
         
     <div className='md:hidden text-amber-500 font-bold text-2xl'>
      {
        showmenu?
        
        <FaXmark 
        onClick= {()=>setshowmenu(!showmenu)}
        className='cursor-pointer'/>:
        <FaBars onClick= {()=>setshowmenu(!showmenu)}
        className='cursor-pointer'/>
      }

      
      
      
      
      
      
                     
                     
               </div>       

                 </div> 
{/* Mobile menu */}
                 {
        showmenu && (
              <div className='md:hidden mt-4 bg-emerald-900 h-screen rounded-lg p-4 flex flex-col space-y-4 justify-center items-center'>
                          <a onClick= {()=>setshowmenu(!showmenu)} href="#home" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
                          <span>Home</span>
                          </a>

                          <a onClick= {()=>setshowmenu(!showmenu)} href="#about" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
                          <span>About</span>
                          </a>

                          <a onClick= {()=>setshowmenu(!showmenu)} href="#skills" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
                          <span>Skills</span>
                          </a>

                          <a onClick= {()=>setshowmenu(!showmenu)} href="#projects" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
                          <span>Projects</span>
                          </a>

                          <a onClick= {()=>setshowmenu(!showmenu)} href="#contact" className='relative text-2xl font-semibold text-white transition duration-300 hover:text-amber-500 group'>
                          <span>Contact</span>
                          </a>

          
          

                      </div>
                  )
      }   
      


    </nav>
  )
}

export default Navbar
