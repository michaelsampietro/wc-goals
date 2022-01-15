import Link from "next/link";
import React from "react";

const pages: React.FC = () => {
  return (
    <section className="container mx-auto text-center space-y-5">
      <h1 className="text-2xl font-bold">Copa não encontrada!</h1>
      <Link href={"/"} passHref>
        <button className="rounded px-3 bg-gray-100 hover:bg-gray-500 duration-300 text-lg">Voltar</button>
      </Link>
    </section>
  );
};

export default pages;
