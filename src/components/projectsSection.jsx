export default function ProjectsSection() {
  //bg-[#4731D3]

  const projects = [
    {
      imgsrc: "https://picsum.photos/290/300",
      name: "Project 1",
      description: "Description of project 1",
      usedTech: ["React", "Node.js", "Tailwind"],
    },

    {
      imgsrc: "https://picsum.photos/290/300",
      name: "Project 2",
      description: "Description of project 1",
      usedTech: ["Html", "Css", "Node.js"],
    },

    {
      imgsrc: "https://picsum.photos/290/300",
      name: "Project 3",
      description: "Description of project 1",
      usedTech: ["React", "Node.js", "Redux"],
    },
  ];

  return (
    <section className="bg-[#CBF281]  items-center flex justify-center flex-col">
      <h1 className="text-[#4731D3]  text-start font-bold">Projects</h1>

      {projects.map((projects) => (
        <div className="justify-center p-2 m-5 bg-white items-center rounded-[12px]">
          <div className="flex flex-row p-2">
            <img src={projects.imgsrc} />
            <div className="flex flex-col p-2">
              <h2 className="text-[#4731D3] font-bold">{projects.name}</h2>
              <p>{projects.description}</p>
              <p>{projects.usedTech}</p>
              <div className="text-black font-medium text-xs gap-2 flex flex-row">
                <p>View Site</p>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
