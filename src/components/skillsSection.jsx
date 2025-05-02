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
      <div className="flex  flex-col md:flex-row  justify-center gap-2 md:gap-34">
        <p className=" text-[48px] font-bold text-[var(--color-customSkill)]">
          {data.title}
        </p>

        <div className="grid grid-cols-2 md:gap-20 gap-6  font-inter ">
          {data.skills.map((skills) => (
            <div className="flex flex-row items-center ">
              <img
                className="rounded-md  h-16 w-16  md:h-32 md:w-32"
                src={skills.icon}
                alt={skills.name}
              />
              <p className=" text-xs md:text-2xl ml-2 text-[var(--color-customTextSkills)] font-medium">
                {skills.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
