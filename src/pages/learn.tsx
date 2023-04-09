import Head from 'next/head';
import { Inter } from 'next/font/google';
import Nav from "@/components/nav/nav";
import React from "react";
import Article from "@/components/article/article";

const inter = Inter({ subsets: ['latin'] })

export default function learn() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Itech" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Article></Article>
      <Nav></Nav>
    </>
  )
}
