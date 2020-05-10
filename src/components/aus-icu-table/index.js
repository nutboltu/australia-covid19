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
    render: (text) => <Text type='danger'>{text.toLocaleString()}</Text>,
  },
  {
    title: <Text>Hospitalised</Text>,
    dataIndex: 'hospitalised',
    key: 'hospitalised',
    render: (text) => <span>{text.toLocaleString()}</span>,
  },
];

export const AusICUTable = ({
  data,
}) => {
  return (
    <div style={{ cursor: 'pointer'}}>
      <Table
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