import React from 'react';
import Link from 'next/link';
import { Layout  } from 'antd';
import { StateSelect } from '../state-select';
import { CoffeeOutlined } from '@ant-design/icons';

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

export const AppHeader = ({ state = '', onStateChange }) => {
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
        height: 'auto',
        maxWidth: '1024px'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <div><Link href='/'><a> <Logo /></a></Link></div>
        <div>
          <a
            href='https://github.com/sponsors/nutboltu'
            style={{ color: '#333'}}
          >
              <CoffeeOutlined />
          </a>
        </div>
      </div>
      <StateSelect defaultValue={state} onStateChange={onStateChange} />
  </Header>
  );
}