export default function ProjectsSection() {
  //bg-[#4731D3]

  const projects = [
    {
      imgsrc: "https://picsum.photos/360/360?21",
      name: "Workintech",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      usedTech: ["React", "Node.js", "Tailwind"],
    },

    {
      imgsrc: "https://picsum.photos/360/360?5",
      name: "My Pizza Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam perspiciatis voluptatem dolore quasi nobis eius atque laboriosam, labore maxime impedit sequi quos quisquam. Eligendi ducimus dolorum autem minima omnis.",
      usedTech: ["Html", "Css", "Node.js"],
    },

    {
      imgsrc: "https://picsum.photos/360/360?28",
      name: "WitFlix",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis voluptatum aspernatur ex corrupti? Exercitationem eaque corporis ad voluptatum? Sunt, fugit. Delectus odit ipsam eveniet repudiandae mollitia non, esse unde!",
      usedTech: ["React", "Node.js", "Redux"],
    },
  ];

  return (
    <section className="bg-[var(--color-customYellow2)]  font-inter py-12">
      <div className="flex flex-col mt-4  mx-90">
        <h1 className="text-[var(--color-customSkill)] text-[48px] font-bold">
          Projects
        </h1>

        {projects.map((projects) => (
          <div className="justify-center   shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14),0px_8px_28px_-6px_rgba(24,39,75,0.12)] my-4 bg-[var(--color-customWhite)] items-center rounded-[12px]">
            <div className="flex flex-row py-2 ">
              <img
                className="rounded-tl-[12px] rounded-bl-[12px]"
                src={projects.imgsrc}
              />
              <div className="flex flex-col gap-4 p-2 ml-5 justify-center">
                <h2 className="text-[var(--color-customProjectName)] text-[32px] font-bold">
                  {projects.name}
                </h2>
                <p className="text-[var(--color-customBlackText)]">
                  {projects.description}
                </p>
                <div className="flex flex-row gap-2 text-[14px] font-medium  text-white ">
                  {projects.usedTech.map((tech, index) => (
                    <div
                      className="px-4 pt-2 pb-2  rounded-[23px] bg-[var(--color-customButtonBack)]"
                      key={index}
                    >
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
                <div className="text-[var(--color-customViewSite)] font-medium text-xs gap-2 flex flex-row">
                  <p className="underline underline-offset-3 cursor-pointer">
                    View Site
                  </p>
                  <p className="underline underline-offset-3 cursor-pointer">
                    Github
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
