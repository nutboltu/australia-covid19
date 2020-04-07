import React from 'react';
import { Table, Tag, Typography } from 'antd';
const { Text } = Typography;

const TotalRow = ({ confirmed, deaths, recovered}) => (
  <tr>
    <th>Total</th>
    <th>
      <Tag color='orange'>{confirmed}</Tag>
    </th>
    <th>
      <Tag color='volcano'>{deaths}</Tag>
    </th>
    <th>
      <Tag color='cyan'>{recovered}</Tag>
    </th>
  </tr>
)
const columns = [
  {
    title: 'State',
    dataIndex: 'code',
    key: 'code',
    width: '65px',
    render: (text) => <span>{text}</span>,
  },
  {
    title: () => <Text type='warning'>Confirmed</Text>,
    dataIndex: 'confirmed',
    key: 'confirmed',
    sorter: (a, b) => a.confirmed - b.confirmed,
  },
  {
    title: () => <Text type='danger'>Deaths</Text>,
    dataIndex: 'deaths',
    key: 'deaths',
    width: '65px',
    sorter: (a, b) => a.deaths - b.deaths,
  },
  {
    title: <Text type='secondary'>Recovered</Text>,
    dataIndex: 'recovered',
    key: 'recovered',
  },
];

export const CurrentStatus = ({
  data,
  onClick,
  total,
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
        style={{fontSize: 8 }}
        summary={() => (
          <TotalRow
            confirmed={total.confirmed}
            deaths={total.deaths}
            recovered={total.recovered}
          />
          )
        }
      />
    </div>  
  )
}