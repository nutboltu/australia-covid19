import React from 'react';
import  { BreakpointProvider } from 'react-socks';
import Head from 'next/head';
import { Layout } from 'antd';
import { AppHeader } from '../header';
import { AppFooter } from '../footer';
const { Content } = Layout;

export const AppLayout= ({ children }) => {
  return (
  <div className="container">
    <Head>
      <title>Australia COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <BreakpointProvider>
        <Layout style={{
          backgroundColor: 'white'
        }}>
          <AppHeader />
          <Content style={{
            margin: '64px 0 100px'
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
