// SkillContainer.js
import React from "react";
import SkillCard from "./SkillCard";
import { FaHtml5, FaCss3, FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";

const initialSkills = [
  { title: "React", icon: <FaReact /> },
  { title: "JavaScript", icon: <IoLogoJavascript /> },
  { title: "tailwind", icon: <SiTailwindcss /> },
  { title: "Bootstrap", icon: "🚀" },
  { title: "HTML", icon: <FaHtml5 /> },
  { title: "CSS", icon: <FaCss3 /> },
];

const SkillContainer = ({ skills }) => {
  const skillsToRender = skills || initialSkills;

  return (
    <>
      <section className="mt-8">
        <h2 className="text-lg mx-3 text-white font-bold mb-4">
          <span
            className="bg-purple-500  h-3 w-3 inline-block mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          My Bag of Skills
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 m-4"
          style={{ backgroundColor: "#0b0b0b" }}
        >
          {skillsToRender.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillContainer;
