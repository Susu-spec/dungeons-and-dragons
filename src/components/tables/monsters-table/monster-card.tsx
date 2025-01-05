import { CardContentProps } from "../../../types";

export const MonsterCard = ({ variant, data }: CardContentProps) => {
  console.log(data);
  return (
    <div
      className={`w-full h-full flex items-center justify-center shadow-md rounded-3xl ${
        variant === "Front" ? "bg-blue-500" : "bg-green-500"
      } text-white text-lg`}
    >
      {variant === "Front" ? "Front of Card" : "Back of Card"}
    </div>
  );
};

const CardFront = ({ data }: { data: any }) => {
  return <></>;
};
const CardBack = ({ data }: { data: any }) => {
  return <></>;
};
