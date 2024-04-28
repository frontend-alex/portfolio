import Circle from "@svgs/Circle";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact-section" className="my-20 border-0 lg:border border-[#0F0F10] dark:border-[#252525] rounded-md flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
      <div className="text-white dark:text-black w-full bg-[#0F0F10] dark:bg-[#F5F5F5] px-3 overflow-hidden">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 px-10 mt-10">
            <h1 className="text-xl font-bold">AI</h1>
            <h1 className="">Aleksandar Ivanov</h1>
          </div>
          <h1 className="p-10 special-font text-6xl">
            I'd love <br className="hidden md:flex" />
            to hear from you
          </h1>
          <Circle />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 text-center w-full opacity-50 my-10">
            <h1 className="font-bold">AI</h1>
            <p className="text-sm">Privacy Policy • Modern Day Statement</p>
          </div>
        </div>
      </div>
      <form className="w-full contact-form">
        <h1 className="special-font text-5xl">Contact Me</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="input-container">
              <label>First Name</label>
              <input placeholder="Enter your first name" required/>
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input placeholder="Enter your last name" required/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="input-container">
              <label>Email</label>
              <input placeholder="Enter your email" required/>
            </div>
            <div className="input-container">
              <label>Phone</label>
              <input placeholder="Enter your phone number" required/>
            </div>
          </div>
          <div className="textarea-container">
            <label>Message</label>
            <textarea cols={6} placeholder="Enter your message..." required></textarea>
          </div>
        </div>
        <button id="hoverElement" className="w-full bg-[#0F0F10] text-white flex justify-center p-4 rounded-md items-center gap-3">Submit <ArrowRight/></button>

        <div className="flex flex-col gap-2">
            <p>Email Me</p>
            <a id="hoverElement" className="underline cursor-pointer w-full">alexmmech@gmail.com</a>
        </div>

        <div className="flex items-center gap-5 opacity-50">
            <a href="#" className="cursor-pointer" id="hoverElement"><Instagram/></a>
            <a href="#" className="cursor-pointer" id="hoverElement"><Linkedin/></a>
            <a href="#" className="cursor-pointer" id="hoverElement"><Github/></a>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
