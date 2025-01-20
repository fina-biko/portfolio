import SkillBar from "./skills_compentency.jsx";

const Skills = () => {
  const skills = [
    { name: "Python"  },
    { name: "JavaScript"},
    { name: "CSS" },
    { name: "Machine Learning and deep learning " },
      { name: "Frontend Dev" },
      { name: "Backend dev" },
      { name: "API intergration" },
      { name: "SQl" },

  ];

  return (
    <section className=" flex flex-col  md:flex-row py-6 bg-gray-900 rounded-lg m-2">

      <div className="text-gray-400">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name}  />
        ))}
      </div>
    </section>
  );
};

export default Skills;
