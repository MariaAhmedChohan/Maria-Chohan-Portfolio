import React from "react";
import { motion } from "framer-motion";
import { projects, assets } from "../assets/assets.js";
import ProjectCard from "./projectCards.jsx";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 4, y: 50 }}
      WhileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]"
    >
      <div className="container mx-10 px-6">
        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-white mb-4">
          My <span className="text-amber-500">Projects</span>
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-2  text-xl">
          A selection of my recent work
        </p>

        {/* cards */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">

                   {/* projects cards */}
                  {
                    projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))
                    }
                </div>
                <div>
                  
                </div>
        </div>
    </motion.div>
  );
};

export default Projects;
