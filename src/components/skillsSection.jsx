import React from "react";

export default function SkillsSection() {
  const skills1 = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png",
    },
    {
      name: "React",
      icon: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    },
  ];

  const skills2 = [
    {
      name: "Html/Css",
      icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    {
      name: "Redux",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVw6XrV_bi5-_sFIbvhYWJmoTkMJDPC0alw&s",
    },
    {
      name: "Figma",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s",
    },
  ];

  return (
    <section className=" flex flex-row items-center  justify-center h-screen bg-white">
      <div className="flex flex-row  gap-40 h-[60%] bg-[#F5F5F5] p-5npm ">
        <p className="text-[48px] font-bold text-[#4832D3]">Skills</p>

        <div className="grid grid-cols-1">
          {skills1.map((skills) => (
            <div className="flex flex-row justify-center items-center">
              <img
                className="rounded-[6px] object-contain"
                src={skills.icon}
                alt={skills.name}
                width="120"
                height="120"
              />
              <p className="text-[24px] text-[#777777] ms-5 font-weight:600">
                {skills.name}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1">
          {skills2.map((skills) => (
            <div className="flex flex-row justify-center items-center">
              <img
                className="rounded-[6px] object-contain"
                src={skills.icon}
                alt={skills.name}
                width="120"
                height="120"
              />
              <p className="text-[24px] ms-5 text-[#777777] font-weight:600">
                {skills.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
