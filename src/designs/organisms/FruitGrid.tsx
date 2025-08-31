import { FC } from "react";
import FruitCard from "../molecules/FruitCard";
// import { FaAppleAlt, FaCarrot, FaLemon, FaTangerine, FaBanana, FaAvocado } from "react-icons/fa"; // import icons
import mango from "../public/images/mango.svg";
const FruitGrid: FC = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-8">WE ARE PIONEERS IN SUBTROPICAL FRUIT RESEARCH</h2>
      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
        <FruitCard icon={mango} title="Mango" />
        {/* <FruitCard icon={<FaCarrot />} title="Guava" />
        <FruitCard icon={<FaLemon />} title="Wood Apple" />
        <FruitCard icon={<FaTangerine />} title="Black Plum" />
        <FruitCard icon={<FaBanana />} title="Indian Gooseberry" />
        <FruitCard icon={<FaAvocado />} title="Avocado" /> */}
      </div>
    </section>
  );
};
export default FruitGrid;
