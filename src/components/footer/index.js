import React from 'react';
import { TwitterOutlined } from '@ant-design/icons';
import { Layout, Descriptions } from 'antd';
const { Footer } = Layout;

export const AppFooter = () => (
  <Footer
  >
    <Descriptions title="Data Sources" layout="vertical">
      <Descriptions.Item label="Johns Hopkins University CSSE"><a href='https://systems.jhu.edu'>https://systems.jhu.edu</a></Descriptions.Item>
      <Descriptions.Item label="World Health Organization (WHO)"><a href='https://www.who.int'>https://www.who.int</a></Descriptions.Item>
      <Descriptions.Item label="Worldometers"><a href='https://www.worldometers.info/coronavirus'>https://www.worldometers.info/coronavirus</a></Descriptions.Item>
      <Descriptions.Item label="Covidlive site"><a href='https://covidlive.com.au'>https://covidlive.com.au</a></Descriptions.Item>
    </Descriptions>
    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <div style={{ color: '#333'}}>
        maintained by
        <a
          target='_blank'
          rel="noreferrer noopener" href='https://github.com/nutboltu'
        >
          {` `}@nutboltu 
        </a>
        {` `}and{` `}
        <a
          target='_blank'
          rel="noreferrer noopener" href='https://sites.google.com/view/kaadnan'
        >kaadnan</a>
        <a
          target='_blank'
          rel="noreferrer noopener" href='https://twitter.com/nutboltu'
        >
          <TwitterOutlined />
        </a>
      </div>
    </div>
  </Footer>
)