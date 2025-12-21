import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets.js";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import keys from "./config.js";


const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    setError(null);

   emailjs.sendForm(keys.VITE_SERVICE_ID, 
                    keys.VITE_TEMPLATE_ID, 
                    form.current, 
                    keys.VITE_PUBLIC_KEY).then((result)=>{
    console.log(result);
    setIsSent(true);
    form.current.reset()
  }).catch((error)=>{
    console.log(error);
    setError("Failed to send message. Please try again later.")
    })
    setIsSending(false);
  }
  return (
   

    <motion.div
      initial={{ opacity: 4, y: 50 }}
      WhileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 bg-linear-to-r from-[#0da37b] via-[#464545] to-[#0da37b]"
    >
      <div className="container mx-1 px-6">
        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Get In <span className="text-amber-500">Touch</span>
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-2 text-xl">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
          {/* form labels */}
          <div>
            <form   ref={form} onSubmit={handleSubmit} className="space-y-6" >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-bold"
                >
                  Your Name
                </label>
                <input
                name="name"
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-bold"
                >
                  Email Address
                </label>
                <input
                name="email"
                  type="text"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your Email Address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-bold"
                >
                  Your Message
                </label>
                <textarea
                name="content"
                  type="text"
                  id="message"
                  className="w-full h-40 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Type your message here"
                />
              </div>

              {/* show message */}
              {isSent && <p className="text-green-500">Message sent successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-3 bg-amber-600 rounded-lg font-medium bor shadow-lg hover:bg-amber-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* contact info */}

          <div className="space-y-8">

            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  Location
                </h3>
                <p className="text-gray-300">Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">mariaahmedchohan@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+92 320 2812835</p>
              </div>
            </div>


            <div className="pt-4">
            <h3 className="text-white text-lg font-semibold mb-6">Follow Me</h3>

            <div className="flex space-x-4">
              <a href="https://github.com/MariaAhmedChohan" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-1xl hover:bg-amber-500 transition duration-300">
                <FaGithub />
              </a>

               <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mariaahmedchohan/" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-1xl hover:bg-amber-500 transition duration-300">
                <FaLinkedin />
              </a>

               <div className="flex space-x-4">
              <a href="https://www.youtube.com/@maria_chohan" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-1xl hover:bg-amber-500 transition duration-300">
                <FaYoutube />
              </a>

               <div className="flex space-x-4">
              <a href="https://www.instagram.com/maria__chohan/?next=%2F" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-1xl hover:bg-amber-500 transition duration-300">
                <FaInstagram />
              </a>

              <div className="flex space-x-4">
              <a href="https://www.facebook.com/mariaahmedchohan/" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-1xl hover:bg-amber-500 transition duration-300">
                <FaFacebook />
              </a>

            </div>

        
               
            
            </div>
            </div>
            </div>
            </div>

            

          </div>

           


           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
