import TechnologyCard from "../molecules/TechnologyCard";

const technologies = [
  { technologyName: "Espalier Training System For Increased Productivity And Quality Of Guava" },
  { technologyName: "CISH Metwash" },
];

const TechnologiesSection: React.FC = () => (
  <section className="flex flex-col space-y-4">
    {technologies.map((technology, index) => (
      <TechnologyCard key={index} technologyName={technology.technologyName} />
      
    ))}
  </section>
);

export default TechnologiesSection;
