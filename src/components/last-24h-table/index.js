import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;

const columns = [
  {
    title: 'State',
    dataIndex: 'code',
    key: 'code',
    width: 80,
    render: (text) => <span>{text}</span>,
  },
  {
  title: () => <Text type='warning'>Confirmed(24h)</Text>,
    dataIndex: 'confirmed',
    key: 'confirmed',
    render: (text) => <Text type='warning'>{text.toLocaleString()}</Text>,
  },
  {
  title: <Text>Tested(24h)</Text>,
    dataIndex: 'tested',
    key: 'tested',
    width: 100,
    render: (text) => <span>{text.toLocaleString()}</span>,
  },
];

export const Last24hTable = ({
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