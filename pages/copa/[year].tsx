import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import YouTube from "react-youtube";
import Button from "../../components/Button";
import { getAllWorldCups, getWorldCupByYear } from "../../services/apis";
import { WorldCup } from "../../types/WorldCup.type";

type Props = {
  data: {
    worldCup: WorldCup;
  };
};

const Cup: React.FC<Props> = ({ data }) => {
  const { worldCup } = data;
  const router = useRouter();
  console.log(router);
  const { year } = router.query;
  return (
    <>
      <Head>
        <title>
          Gols Copa {worldCup.year} - {worldCup.country}{" "}
        </title>
      </Head>
      <div className="container mx-auto text-center space-y-5">
        <h1 className="text-2xl font-bold">
          Copa {year} - {worldCup.country}
        </h1>

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

export async function getStaticPaths() {
  const data = await getAllWorldCups();

  return {
    paths: data.allWorldCups.map((worldCup: WorldCup) => {
      return { params: { year: worldCup.year.toString() } };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { year: string } }) {
  console.log(params);
  const data = await getWorldCupByYear(params.year);
  return {
    props: { data },
  };
}
