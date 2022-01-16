/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import WorldCupCard from "../components/WorldCupCard";
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
          <WorldCupCard key={worldCup.id} worldCup={worldCup} />
        ))}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllWorldCups();
  return {
    props: { data },
  };
};
