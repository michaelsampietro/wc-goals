/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { getAllWorldCups } from "../services/apis";
import { WorldCup } from "../types/WorldCup.type";

type Props = {
  data: {
    allWorldCups: WorldCup[];
  };
};

const Home: NextPage<Props> = ({ data }) => {
  const { allWorldCups: worldCups } = data;
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {worldCups.map((worldCup: WorldCup) => (
          <Link key={worldCup.id} href={`/copa/${worldCup.year}`} passHref>
            <div className="text-center justify-items-center my-5 cursor-pointer hover:bg-slate-100 transition-all duration-300 rounded p-1 active:bg-slate-400 ">
              <div className="flex h-[200px] w-auto items-center">
                <img
                  className="mx-auto"
                  src={worldCup.logo.responsiveImage.src}
                  alt={`Copa ${worldCup.year} - ${worldCup.country}`}
                />
              </div>
              <span
                className="font-bold text-base"
                key={worldCup.id}
              >{`${worldCup.year} - ${worldCup.country}`}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getAllWorldCups();
  return {
    props: { data },
  };
}
