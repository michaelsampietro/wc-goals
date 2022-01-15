import Head from "next/head";
import React from "react";
import NavBar from "../NavBar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gols Copa do Mundo</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
