import React from 'react';
import { TwitterOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
const { Footer } = Layout;

export const AppFooter = () => (
  <Footer
    style={{
      backgroundColor: 'white',
      color: '#ccc',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '24px'
    }}
  >
    <div>
      maintained by
        <a
          target='_blank'
          rel="noreferrer noopener" href='https://github.com/nutboltu'
          style={{color: '#ccc'}}
        >
          {` `}@nutboltu {` `}
        </a>
        <a
          target='_blank'
          rel="noreferrer noopener" href='https://twitter.com/nutboltu'
          style={{color: '#ccc'}}
        >
          <TwitterOutlined />
        </a>
    </div>
  </Footer>
)