import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import YouTube from "react-youtube";
import Button from "../../components/Button";
import { getAllWorldCups, getWorldCupByYear } from "../../services/apis";
import { WorldCup } from "../../types/WorldCup.type";
import { generateWorldCupName } from "../../utils/generateWorldCupName";

type Props = {
  data: {
    worldCup: WorldCup;
  };
};

const Cup: React.FC<Props> = (params) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { worldCup } = params.data;

  return (
    <>
      <Head>
        <title>Gols Copa {generateWorldCupName(worldCup)}</title>
      </Head>
      <div className="container mx-auto text-center space-y-5">
        <h1 className="text-2xl font-bold">{generateWorldCupName(worldCup)}</h1>

        <YouTube
          videoId={worldCup.video.providerUid}
          className="mx-auto"
          containerClassName=" flex"
          opts={{
            height: "280",
            width: "500",
          }}
        />

        <Button>
          <Link href={`/`} passHref>
            <span className="space-x-2">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Voltar</span>
            </span>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Cup;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllWorldCups();

  return {
    paths: data.allWorldCups.map((worldCup: WorldCup) => {
      return { params: { year: worldCup.year.toString() } };
    }),
    fallback: true,
  };
};

type ParamsType = {
  params: {
    year: string;
  };
};

export const getStaticProps = async ({ params }: ParamsType) => {
  const data = await getWorldCupByYear(params.year);
  return {
    props: { data },
  };
};
