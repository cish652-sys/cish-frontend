import ImageAtom from "@/designs/atoms/ImageDirectorDesk";  // Import your existing ImageAtom
import { Button } from "@/designs/atoms/button";  // Import the ShadCN Button component

interface ProductCardProps {
  imageSrc: string;
  productName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName }) => (
  <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg space-y-4 w-80"> {/* Adjusted for shadow and spacing */}
    <ImageAtom
      src={imageSrc}
      alt={productName}
      width={320}  // Ensure square image for better layout
      height={320}
      className="rounded-lg object-cover"
    />
    <h3 className="text-xl font-semibold text-center">{productName}</h3>  {/* Ensure text is centered */}
    <Button variant="default" size="default" className="mt-4">
      View More
    </Button>
  </div>
);

export default ProductCard;
