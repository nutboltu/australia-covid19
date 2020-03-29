import React from 'react';
import Link from 'next/link';
import { Layout, Tag  } from 'antd';
import { GlobalOutlined, GithubOutlined } from '@ant-design/icons';
import globalCases from '../../data/global_cases.json';

const { Header } = Layout;

const Logo = () => (
  <span style={{ 
    color: 'white',
    background: 'white',
    fontSize: '30px',
    textShadow: '1px 1px 0 #000b5b, 1px -1px 0 #000b5b, -1px 1px 0 #000b5b, -1px -1px 0 #000b5b, 1px 0px 0 #000b5b, 0px 1px 0 #000b5b, -1px 0px 0 #000b5b, 0px -1px 0 #000b5b',
   }}>
    AUSTRALIA
    {` `}
    COVID
    <span style={{
      color: 'red',
      textShadow: 'none',
    }}>
      19
    </span>
  </span>
);

export const AppHeader = () => {
  return (
    <Header
      style={{
        fontSize: '20px',
        color: '#001529',
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 4,
        width: '1024px',
        padding: 0
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <GlobalOutlined style={{ marginRight: '10px'}} />
          <Tag color='orange' className='ant-tag-lg'> Confirmed {globalCases.confirmed}</Tag>
          <Tag color='volcano' className='ant-tag-lg'> Deaths {globalCases.deaths}</Tag>
          <Tag color='cyan' className='ant-tag-lg'> Recovered {globalCases.deaths}</Tag>
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'black'}}
              href='https://github.com/nutboltu/australia-covid19'
            >
              <GithubOutlined />
            </a>
        </div>
      </div>
  </Header>
  );
}