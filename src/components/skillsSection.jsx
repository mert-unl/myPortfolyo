import React, { useContext } from "react";
import figma from "../assets/figma-logo.png";
import javascript from "../assets/js-logo.png";
import node from "../assets/node-logo.png";
import react from "../assets/React-logo.png";
import redux from "../assets/vscode-logo.png";
import vscode from "../assets/redux-logo.png";
import "@fontsource/inter";
import { languageContext } from "../App";

export default function SkillsSection() {
  const skills1 = [
    {
      name: "JAVASCRIPT",
      icon: javascript,
    },
    {
      name: "NODE",
      icon: node,
    },
    {
      name: "REACT",
      icon: react,
    },
  ];

  const skills2 = [
    {
      name: "FIGMA",
      icon: figma,
    },
    {
      name: "VS CODE",
      icon: redux,
    },
    {
      name: "REDUX",
      icon: vscode,
    },
  ];

  const { lang } = useContext(languageContext);

  const data = lang.skillSection;

  return (
    <section className=" font-inter flex flex-row items-center justify-center h-screen bg-[var(--color-customWhite)]">
      <div className="flex flex-row  justify-center gap-34">
        <p className=" text-[48px] font-bold text-[var(--color-customSkill)]">
          {data.title}
        </p>

        <div className="grid grid-cols-2  gap-8 font-inter ">
          {data.skills.map((skills) => (
            <div className="flex flex-row items-center ">
              <img
                className="rounded-[6px] h-[128px] w-[128px]"
                src={skills.icon}
                alt={skills.name}
              />
              <p className="text-[24px] ml-4 text-[var(--color-customTextSkills)] font-medium">
                {skills.name}
              </p>
            </div>
          ))}
        </div>

        {/* Second row of skills 
        <div className="grid grid-cols-1 gap-8">
          {skills2.map((skills) => (
            <div className="flex flex-row items-center">
              <img
                className="rounded-[6px] h-[128px] w-[128px]"
                src={skills.icon}
                alt={skills.name}
              />
              <p className="text-[24px] ml-4 text-[var(--color-customTextSkills)] font-medium">
                {skills.name}
              </p>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
