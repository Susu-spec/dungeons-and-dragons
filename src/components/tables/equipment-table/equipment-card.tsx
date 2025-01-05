import { CardContentProps } from "../../../types";

export const EquipmentCard = ({ variant, data }: CardContentProps) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center shadow-md rounded-3xl font-lato dark-brown ${
        variant === "Front" ? "bg-paper" : "bg-paper"
      } text-white text-lg`}
    >
      {variant === "Front" ? "Front of Card" : "Back of Card"}
    </div>
  );
};

const CardFront = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 justify-center"></div>
    </div>
  );
};
const CardBack = ({ data }: { data: any }) => {
  return <></>;
};
