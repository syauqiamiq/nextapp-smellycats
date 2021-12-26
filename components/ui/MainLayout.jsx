import React from "react";
import Head from "next/head";
import NavbarComponent from "components/navigations/NavbarComponent";
import FooterComponent from "components/navigations/FooterComponent";

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>The smelly catxs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="The homepage of the smelly cats, the greatest band in the whole world" />
        <meta name="keywords" content="Music, shows, smelly cats" />
        <meta name="author" content="The smelly cats" />
      </Head>
      <NavbarComponent />
      {props.children}
      <FooterComponent />
    </>
  );
};

export default MainLayout;
