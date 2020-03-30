import React from 'react';
import Link from 'next/link';
import { Layout  } from 'antd';

const { Header } = Layout;

const Logo = () => (
  <span className='logo'>
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
        padding: '0 24px',
        width: '100%',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        
      }}>
        <Link href='/'><a> <Logo /></a></Link>
      </div>
  </Header>
  );
}