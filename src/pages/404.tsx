import Head from 'next/head';
import { Inter } from 'next/font/google';

import React from "react";
import Error404 from "@/components/error404/error404";

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Itech" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
        <Error404></Error404>
    </>
  )
}
