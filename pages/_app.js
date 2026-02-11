/* eslint-disable @next/next/no-sync-scripts */
import * as React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StylesProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTranslations as t } from '../locales';
import '../public/assets/styles/style.css';
import { checkTheme } from '../src/config/Theme';
import { Theme } from '../src/config/Theme';

//check whether the user prefers/chose dark theme
checkTheme();

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`TreasureLock - ${t('sub_title')}`}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Encrypt and Decrypt files securely in your browser."
        />
        <meta
          name="Keywords"
          content="encrypt decrypt encryption file-encryption javascript client-side serverless decryption xchcha20 argon2id encryption-decryption webcrypto crypto browser in-browser"
        />
      </Head>

      <StylesProvider theme={Theme}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </CacheProvider>
  );
}

export default MyApp;
