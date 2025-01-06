import { CardContentProps } from "../../../types";

export const SpellCard = ({ variant, data }: CardContentProps) => {
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
      <div className="grid grid-cols-2 gap-4 text-left w-full ">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Index
            </p>
            <p className="text-black text-sm font-semibold">{data?.index}</p>
          </div>
          <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Description
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
              {data?.desc || "No details found."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-left">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              School
            </p>
            <p className="text-black text-sm font-semibold">
              {data?.school.name}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Materials
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-6">
              {data?.material || "No materials."}
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
      <div className="grid grid-cols-2 gap-4 text-left w-full ">
        <div className="flex flex-col justify-between h-full w-full min-h-[20rem]">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Level
            </p>
            <p className="text-black text-sm font-semibold">{data?.level}</p>
          </div>
          <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Duration
            </p>
            <p className="text-black text-sm font-semibold">
              {data?.duration || "No details found."}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Ritual
            </p>
            <p className="text-black text-sm font-semibold">
              {data?.ritual ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full w-full min-h-[20rem]">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Higher Level
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-6">
              {data?.higher_level || "No details found."}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Concentration
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
              {data?.concentration ? "Yes" : "No"}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Damage
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
              {data?.damage?.damage_type?.name || "No details found."}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full items-center mt-8">
        <p className="text-black text-xl font-semibold font-unifraktur">
          Attack Type
        </p>
        <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
          {data?.attack_type || "No details found."}
        </p>
      </div>
    </div>
  );
};
