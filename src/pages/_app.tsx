import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { RootLayout } from '@/styles/root-layout';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';

const Application: React.FC<AppProps> = (props) => {

  const { Component, pageProps } = props;

  useEffect(() => {
    console.log(`app version: %c${'0.0.1'}`, 'color: #263238; font-weight: bold;');
  }, []);

  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </>
  );

};

const wrapper = createWrapper(() => store);
export default wrapper.withRedux(Application);
