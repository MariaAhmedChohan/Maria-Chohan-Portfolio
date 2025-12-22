import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets.js";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 4, y: 50 }}
      WhileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]"
    >
      <div className="container mx-1 px-6">
        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-white mb-4">
          About <span className="text-amber-500">Me</span>
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-2 text-xl">
          Get to know more about my background and passion
        </p>

        {/* image=+journey*/}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image here */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 1, y: 50 }}
              WhileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="MariaProfile"
            />
          </div>
          {/* text here */}
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            WhileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-4">
              <h3 className="text-gray-300 font-bold text-2xl mb-6">
                My Journey
              </h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with over couple of years of
                experience creating digital solutions for businesses around the
                world. My journey started with basic HTML/CSS websites and has
                evolved into building complex web applications with modern
                frameworks.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web.
              </p>
              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-2xl transition duration-300 p-6 shadow-2xl hover:-translate-y-2 hover:shadow-amber-500
                        cursor-pointer"
                  >
                    <div>
                      <data.icon className="text-amber-500 text-3xl mb-4" />
                    </div>
                    <h4 className="text-gray-300 font-semibold text-xl mb-2">
                      {data.title}
                    </h4>
                    <p className="text-gray-300">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
