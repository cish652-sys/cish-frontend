import { Button } from "@/designs/atoms/button"; // import the ShadCN Button component

interface TechnologyCardProps {
  technologyName: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technologyName }) => (
  <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-xl font-semibold mt-4">{technologyName}</h3>
    <Button variant="default" size="default" className="mt-2">
      View More
    </Button>
  </div>
);

export default TechnologyCard;
