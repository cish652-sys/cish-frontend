import Image from "next/image";

interface FruitCardProps {
  name: string;
  icon: string;
  isActive?: boolean;
}

export const FruitCard = ({ name, icon, isActive = false }: FruitCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center border rounded-md p-4 w-28 h-28 cursor-pointer transition-all duration-300 ${
        isActive ? "bg-green-100 border-green-700 shadow-md" : "border-gray-300"
      }`}
    >
      <Image src={icon} alt={name} width={48} height={48} />
      <span
        className={`mt-2 text-xs font-semibold uppercase ${
          isActive ? "text-green-700" : "text-gray-700"
        }`}
      >
        {name}
      </span>
    </div>
  );
};
