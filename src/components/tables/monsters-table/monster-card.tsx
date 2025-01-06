import { CardContentProps } from "../../../types";

export const MonsterCard = ({ variant, data }: CardContentProps) => {
  console.log(data);
  return (
    <div
      className={`w-full h-full flex items-center justify-center shadow-md rounded-3xl font-lato dark-brown ${
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
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Size
            </p>
            <p className="text-black text-sm font-semibold">{data?.size}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Strength
            </p>
            <p className="text-black text-sm font-semibold">{data?.strength}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-left">
          <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Description
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
              {data?.desc || "No details found."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Dexterity
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-6">
              {data?.dexterity || "No details found."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Hit Points
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-6">
              {data?.hit_points || "No details found."}
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
              Special Abilities
            </p>
            <div className="flex flex-col gap-2">
              {data?.special_abilities?.length > 0 ? (
                data.special_abilities.map((ability: any, index: number) => (
                  <div key={index} className="flex flex-col gap-1">
                    <p className="text-black text-lg font-semibold">
                      {ability.name}
                    </p>
                    <p className="text-black text-sm text-wrap line-clamp-6">
                      {ability.desc}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-black text-sm">No special abilities.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Armor Class
            </p>
            <div className="flex flex-col gap-3">
              {data?.armor_class?.length > 0 ? (
                data.armor_class.map((armor: any, index: number) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="text-black text-sm font-semibold">
                      {armor.type || "No type available."}
                    </p>
                    <p className="text-black text-sm font-semibold">
                      {armor.spell?.name || "No spell details found."}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-black text-sm font-semibold">
                  No armor details found.
                </p>
              )}
            </div>
          </div>
          {/* <div className="flex flex-col gap-2 w-full text-clip overflow-hidden">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Ritual
            </p>
            <p className="text-black text-sm font-semibold">
              {data?.ritual ? "Yes" : "No"}
            </p>
          </div> */}
        </div>

        <div className="flex flex-col justify-between h-full w-full min-h-[20rem]">
          <div className="flex flex-col gap-2">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Actions
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-6">
              {data?.actions?.action_name || "No details found."}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Languages
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
              {data?.languages || "No details found."}
            </p>
          </div>
          {/* <div className="flex flex-col gap-2 w-full">
            <p className="text-black text-xl font-semibold font-unifraktur">
              Damage
            </p>
            <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
              {data?.damage?.damage_type?.name || "No details found."}
            </p>
          </div> */}
        </div>
      </div>

      {/* <div className="flex flex-col gap-2 w-full items-center mt-8">
        <p className="text-black text-xl font-semibold font-unifraktur">
          Attack Type
        </p>
        <p className="text-black text-sm font-semibold text-wrap line-clamp-[20]">
          {data?.attack_type || "No details found."}
        </p>
      </div> */}
    </div>
  );
};
