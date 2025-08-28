import VarietiesSection from "../organisms/VarietiesSection";
import TechnologiesSection from "../organisms/TechnologiesSection";

const ManinPageProduct: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6">Varieties For Commercialization</h2>
    <VarietiesSection />
    <h2 className="text-2xl font-bold mt-10 mb-6">Technologies For Commercialization</h2>
    <TechnologiesSection />
  </div>
);

export default ManinPageProduct;
