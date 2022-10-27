import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../ui/Navbar";
import pokeball from "../../assets/images/pokeball.png";

interface LayoutProps extends PropsWithChildren<{}> {
  title?: string;
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)

const image = `${origin}/pokeball.png`

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon list"}</title>
        <meta name="author" content="Henry Gomez" />
        <meta
          property="og:title"
          content={`Informacion sobre ${title}`}
        />
        <meta
          property="og:description"
          content="Puedes seleccionar el pokemon que mas te guste y guardarlo en favoritos para verlo cuando desees"
        />
        <meta
          property="og:image"
          content={image}
        />
        <link rel="shortcut icon" href="/pokeball.png" type="image/x-icon" />
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  );
};
