import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;

const columns = [
  {
    title: 'State',
    dataIndex: 'code',
    key: 'code',
    width: '65px',
    render: (text) => <span>{text}</span>,
  },
  {
    title: () => <Text type='warning'>Tests</Text>,
    dataIndex: 'tested',
    key: 'tested',
    render: (text) => <span>{text.toLocaleString()}</span>,
  },
  {
    title: <Text type='secondary'>Population</Text>,
    dataIndex: 'population',
    key: 'population',
    render: (text) => <span>{text.toLocaleString()}</span>,
  },
  {
    title: <Text type='danger'>Positive</Text>,
    dataIndex: 'positive',
    key: 'positive',
    width: '75px',
    render: (text) => <span>{text}</span>,
  },
];

export const AusTestConductedTable = ({
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