import { CardContentProps } from "../../../types";

export const EquipmentCard = ({ variant, data }: CardContentProps) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center rounded-3xl font-lato dark-brown ${
        variant === "Front" ? "bg-paper" : "bg-paper"
      } text-white text-lg`}
    >
      {variant === "Front" ? (
        <CardFront data={data} />
      ) : (
        <CardBack data={data} />
      )}
    </div>
  );
};

const CardFront = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full px-6 py-4">
      <h3 className="font-uncial text-2xl py-3 text-center font-semibold text-black">
        {data?.name}
      </h3>
      <div className="grid gap-10 text-left w-full my-8">
        <div className="flex flex-col gap-2 text-center h-full max-h-[3rem]">
          <p className="text-black text-xl font-semibold font-unifraktur">
            Index
          </p>
          <p className="text-black text-sm font-semibold">{data?.index}</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-black text-xl font-semibold font-unifraktur">
            Description
          </p>
          <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
            {data?.desc || "No details found."}
          </p>
        </div>
        <div className="text-center w-full">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Weight
            </p>
            <p className="text-black text-sm font-semibold">
              {data?.weight || "No details found."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardBack = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full px-6 py-4">
      <h3 className="font-uncial text-2xl py-3 text-center font-semibold text-black">
        {data?.name}
      </h3>

      <div className="flex flex-col items-center gap-10 my-10">
        <div className="flex flex-col gap-2">
          <p className="text-black text-xl font-semibold font-unifraktur">
            Cost
          </p>
          <p className="text-black text-sm font-semibold">
            {`${data?.cost?.quantity} ${data?.cost?.unit}` ||
              "No details found."}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black text-xl font-semibold font-unifraktur">
            Category
          </p>
          <p className="text-black text-sm font-semibold">{`${data?.equipment_category?.name || "No details found."}`}</p>
        </div>
      </div>
    </div>
  );
};
