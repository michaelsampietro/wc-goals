/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { WorldCup } from "../../types/WorldCup.type";
import { generateWorldCupName } from "../../utils/generateWorldCupName";

type Props = {
  worldCup: WorldCup;
};

const WorldCupCard: React.FC<Props> = ({ worldCup }) => {
  console.log(worldCup.logo);
  return (
    <Link key={worldCup.id} href={`/copa/${worldCup.year}`} passHref>
      <div className="text-center justify-items-center my-5 cursor-pointer hover:bg-slate-100 transition-all duration-300 rounded p-1 active:bg-slate-400 ">
        <div className="flex relative h-[200px] w-auto items-center">
          <img
            className="mx-auto"
            src={worldCup.logo.responsiveImage.src}
            alt={worldCup.logo.responsiveImage.alt}
          />
        </div>
        <span className="font-bold text-base" key={worldCup.id}>
          {generateWorldCupName(worldCup)}
        </span>
      </div>
    </Link>
  );
};

export default WorldCupCard;
