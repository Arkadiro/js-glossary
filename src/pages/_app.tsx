import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {useEffect} from 'react';

const Application: React.FC<AppProps> = (props) => {

  const {Component, pageProps} = props;

  useEffect(() => {
      console.log(`app version: %c${'0.0.1'}`, 'color: #263238; font-weight: bold;');
  }, []);

  return (
      <>
          <Component {...pageProps} />
      </>
  );
};

export default Application;
