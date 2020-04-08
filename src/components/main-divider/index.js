import React from 'react';
import { useCurrentWidth } from 'react-socks';
import { Divider } from 'antd';

export const MainDivider = ({ title }) => {
  const width = useCurrentWidth();
  return (
  <Divider orientation="left" style={{
      fontSize: '28px',
      color: '#108ee9',
      position: 'sticky',
      zIndex: 3,
      background: 'white',
      top: width < 550 ? '134px' : '130px',
      }}>
        <div
          style={{ display: 'flex', alignItem: 'center'}}
        >
          <span style={{ paddingLeft: '10px'}}>{title}</span>
        </div>
    </Divider>
  );
}