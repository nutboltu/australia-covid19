import React from 'react';
import { Layout, Tag  } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import globalCases from '../../data/global_cases.json';

const { Header } = Layout;

const Logo = () => (
  <span style={{ fontFamily: 'initial' }}>
    AUS
    <span style={{ color: '#ffd700'}}>TRALIA</span>
    {` `}
    COVID
    <span style={{
      color: 'red',
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
        width: '100%',
        padding: 0
      }}
    >
      <Logo />
      <div style={{
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: '-1px'
      }}>
        <GlobalOutlined style={{ marginRight: '10px'}} />
        <Tag color='orange'> Confirmed {globalCases.confirmed}</Tag>
        <Tag color='volcano'> Deaths {globalCases.deaths}</Tag>
        <Tag color='green'> Recovered {globalCases.deaths}</Tag>
      </div>
  </Header>
  );
}