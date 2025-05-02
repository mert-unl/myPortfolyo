import React, { useContext } from "react";

import "@fontsource/inter";
import { languageContext } from "../App";

export default function SkillsSection() {
  const { lang } = useContext(languageContext);

  const data = lang.skillSection;

  return (
    <section className=" font-inter flex flex-row items-center justify-center gap-20 py-30   bg-[var(--color-customWhite)]">
      <div className="flex  flex-col md:flex-row  md:ms-40 gap-2 md:gap-50">
        <p className=" text-[48px] font-bold text-[var(--color-customSkill)]">
          {data.title}
        </p>

        <div className="grid grid-cols-2 md:space-x-26 gap-6  font-inter ">
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
