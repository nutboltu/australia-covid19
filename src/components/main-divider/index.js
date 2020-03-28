import React from 'react';
import { Divider } from 'antd';

export const MainDivider = ({ title }) => (
  <Divider orientation="left" style={{
    fontSize: '28px',
    color: '#2295ff',
    position: 'sticky',
    zIndex: 3,
    background: 'white',
    top: '64px',
    }}>
      <div
        style={{ display: 'flex', alignItem: 'center'}}
      >
        <span style={{ paddingLeft: '10px'}}>{title}</span>
      </div>
  </Divider>
)