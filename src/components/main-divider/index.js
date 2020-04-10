import React from 'react';
import { useCurrentWidth } from 'react-socks';
import { Divider } from 'antd';

export const MainDivider = ({ title }) => {
  const width = useCurrentWidth();
  return (
  <div className='main-divider'>
    <Divider orientation="left">
          <div
            style={{ display: 'flex', alignItem: 'center'}}
          >
            <span style={{ paddingLeft: '10px'}}>{title}</span>
          </div>
      </Divider>
  </div>
  );
}