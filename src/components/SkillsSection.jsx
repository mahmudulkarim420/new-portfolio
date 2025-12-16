import { skills } from "../components/Shared/data";

const SkillBar = ({ name, level }) => {
  const width =
    level === "Intermediate" ? "w-[75%]" : "w-[45%]";
  const color =
    level === "Intermediate" ? "bg-[#FF6F61]" : "bg-[#FF6F61]/60";

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold">{name}</p>
      <div className="h-3 bg-[#0B0D17] rounded-full overflow-hidden">
        <div className={`h-full ${width} ${color} rounded-full`} />
      </div>
      <p className="text-xs text-[#FF6F61]/60">{level}</p>
    </div>
  );
};

export default function SkillsSection({ refProp }) {
  return (
    <section ref={refProp} className="grid lg:grid-cols-4 gap-6">
      
      {/* Frontend Card */}
      <div className="lg:col-span-3 bg-[#1C1F3A] rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-[#FF6F61] mb-8">
          Frontend Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.frontend.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>

      {/* Backend Card */}
      <div className="lg:col-span-1 bg-[#1C1F3A] rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-[#FF6F61] mb-8">
          Backend<br />Development
        </h2>

        <div className="space-y-8">
          {skills.backend.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
