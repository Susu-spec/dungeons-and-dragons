import { CardContentProps } from "../../../types";

export const SpellCard = ({ variant, data }: CardContentProps) => {
  console.log(data);
  return (
    <div
      className={`w-full h-full flex items-center justify-center shadow-md rounded-3xl font-lato dark-brown ${
        variant === "Front" ? "bg-paper" : "bg-paper"
      } text-white text-lg`}
    >
      {variant === "Front" ? <CardFront data={data} /> : "Back of Card"}
    </div>
  );
};

const CardFront = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full px-6 py-4">
      <h3 className="font-uncial text-2xl py-3 text-center font-semibold text-black">{data?.name}</h3>
      <div className="grid grid-cols-2 gap-4 text-left w-full ">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">Index</p>
            <p className="text-black text-sm font-semibold">{data?.index}</p>
          </div>
          <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">Description</p>
            <p className="text-black text-sm font-semibold text-wrap ">{data?.desc || "No data."}</p>


          </div>
        </div>

        <div className="flex flex-col gap-10 text-left">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">School</p>
            <p className="text-black text-sm font-semibold">{data?.school.name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">Materials</p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-6">{data?.material || "No materials."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const CardBack = ({ data }: { data: any }) => {
  return <></>;
};
