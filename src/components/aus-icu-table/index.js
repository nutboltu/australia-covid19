import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;

const columns = [
  {
    title: 'State',
    dataIndex: 'code',
    key: 'code',
    render: (text) => <span>{text}</span>,
  },
  {
    title: () => <Text type='danger'>ICU</Text>,
    dataIndex: 'icu',
    key: 'icu',
    render: (text) => <span>{text.toLocaleString()}</span>,
  },
  {
    title: <Text type='warning'>ICU Beds</Text>,
    dataIndex: 'icu_beds',
    key: 'icu_beds',
    render: (text) => <span>{text.toLocaleString()}</span>,
  },
];

export const AusICUTable = ({
  data,
  onClick,
}) => {
  return (
    <div style={{ cursor: 'pointer'}}>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
                onClick(record.code);
            },
          };
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        tableLayout='fixed'
        size='small'
        style={{fontSize: 6 }}
      />
    </div>  
  )
}