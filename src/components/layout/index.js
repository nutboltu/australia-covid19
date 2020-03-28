import React from 'react';

import Head from 'next/head';
import { Layout } from 'antd';
import { AppHeader } from '../header';
const { Footer, Content } = Layout;

export const AppLayout= ({ children }) => {
  return (
  <div className="container">
    <Head>
      <title>Australia COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Layout style={{
        backgroundColor: 'white'
      }}>
        <AppHeader />
        <Content style={{
          margin: '64px 0 100px'
        }}>
          {children}
        </Content>
        <Footer
          style={{backgroundColor: 'white'}}
        ></Footer>
      </Layout>
    </main>
    </div>
  );
}
