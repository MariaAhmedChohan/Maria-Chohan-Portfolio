import React from 'react'
import { projects, assets } from "../assets/assets.js";

const ProjectCards = ({ title, description, image, tech, icons, demo, code }) => {
  return (
    <div className='bg-gray-800 rounded-2xl transition duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-amber-500
                                          cursor-pointer'>
                                            <img src={image} alt={title} className="w-full h-60 object-cover " />
        <div className='p-6'>
        <h3 className='text-white font-semibold text-xl mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
            {tech.map((item, index) => (
                <span key={index} className='inline-block bg-gray-600 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full mt-4'>
      {item}
                </span>
            ))}
            </div>

            <div className='flex gap-2'>
                <a href={demo} className='px-6 py-3 bg-amber-600 rounded-lg font-medium bor shadow-lg hover:bg-amber-500 transition duration-300'>View Demo</a>
                      <a href={code} className='px-6 py-3 border-2 border-amber-600 rounded-lg font-medium shadow-lg  hover:bg-amber-500 transition decoration-amber-300'>Code</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards