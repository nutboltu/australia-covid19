import React, { useEffect } from 'react';
import  { BreakpointProvider } from 'react-socks';
import Head from 'next/head';
import { Layout } from 'antd';
import { initGA, logPageView } from '../../utils/analytics'
import { AppHeader } from '../header';
import { AppFooter } from '../footer';
const { Content } = Layout;

export const AppLayout= ({ state, children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
  <div className="container">
    <Head>
      <title>Australia Covid19</title>
      <meta name="title" content="Australia Covid19"></meta>
      <meta name="description" content="Live updates of Australia's coronavirus cases. It provides the dataset in map, graphs and tabular form with state-level granularity."></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="http://www.australiacovid19.com"></meta>
      <meta property="og:title" content="Australia Covid19"></meta>
      <meta property="og:description" content="Live updates of Australia's coronavirus cases. It provides the dataset in map, graphs and tabular form with state-level granularity."></meta>
      <meta property="og:image" content="https://www.australiacovid19.com/site_preview.png"></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="http://www.australiacovid19.com"></meta>
      <meta property="twitter:title" content="Australia Covid19"></meta>
      <meta property="twitter:description" content="Live updates of Australia's coronavirus cases. It provides the dataset in map, graphs and tabular form with state-level granularity."></meta>
      <meta property="twitter:image" content="https://www.australiacovid19.com/site_preview.png"></meta>
    </Head>

    <main>
      <BreakpointProvider>
        <Layout style={{
          backgroundColor: 'white'
        }}>
          <AppHeader state={state} />
          <Content style={{
            margin: '134px 0 100px'
          }}>
            {children}
          </Content>
          <AppFooter />
        </Layout>
      </BreakpointProvider>
    </main>
    <style jsx global>{`
        @font-face {
          font-family: 'Gotu';
          src: url('/fonts/Gotu-Regular.ttf'); 
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
    `}</style>
    </div>
  );
}
