import ProductCard from "@/designs/molecules/ProductCard";

const varieties = [
  { imageSrc: "/images/cish-ambika.jpg", productName: "CISH-AMBIKA" },
  { imageSrc: "/images/cish-lalit.jpg", productName: "CISH-LALIT" },
  { imageSrc: "/images/cish-alima.jpg", productName: "CISH-ALIMA" },
];

const VarietiesSection: React.FC = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {" "}
    {/* Increased gap for more spacing */}
    {varieties.map((variety, index) => (
      <ProductCard key={index} imageSrc={variety.imageSrc} productName={variety.productName} />
    ))}
  </section>
);

export default VarietiesSection;
