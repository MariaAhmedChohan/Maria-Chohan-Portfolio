import React from "react";
import { motion } from "framer-motion";
import { skills, assets } from "../assets/assets.js";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 4, y: 50 }}
      WhileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]"
    >
      <div className="container mx-1 px-6">
        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-white mb-4">
          My <span className="text-amber-500">Skills</span>
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-2 text-xl">
          Technologies I work with to bring ideas to life
        </p>

        {/* dummy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl transition duration-300 p-6 shadow-2xl hover:-translate-y-2 hover:shadow-amber-500
                                          cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-amber-500 mr-6" />

                <h3 className="text-white font-semibold text-xl ">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tect) => (
                  <span
                    key={tect}
                    className="inline-block bg-gray-600 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full mt-4"
                  >
                    {tect}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
