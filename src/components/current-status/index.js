import React from 'react';
import { Table, Tag, Typography } from 'antd';
import { states } from '../../constants/states';
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
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
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
    sorter: (a, b) => a.deaths - b.deaths,
  },
  {
    title: <Text type='secondary'>Recovered</Text>,
    dataIndex: 'recovered',
    key: 'recovered',
    sorter: (a, b) => a.recovered - b.recovered,
  },
];

const last24hColumns = [
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: (text) => <span>{text}</span>,
  },
  {
    title: () => <Text type='warning'>Confirmed)</Text>,
    dataIndex: 'last_24h_confirmed',
    key: 'last_24h_confirmed',
    sorter: (a, b) => a.last_24h_confirmed - b.last_24h_confirmed,
  },
  {
    title: <Text type='danger'>Deaths</Text>,
    dataIndex: 'last_24h_deaths',
    key: 'last_24h_deaths',
    sorter: (a, b) => a.last_24h_deaths - b.last_24h_deaths,
  },
  {
    title: <Text type='secondary'>Recovered</Text>,
    dataIndex: 'last_24h_recovered',
    key: 'last_24h_recovered',
    sorter: (a, b) => a.last_24h_recovered - b.last_24h_recovered,
  },
];

export const CurrentStatus = ({
  data,
  onClick,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  is24h = false,
}) => {
  return (
    <div style={{ cursor: 'pointer'}}>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
                const { code } = states.find(item => item.name === record.location);
                onClick(code);
            },
          };
        }}
        columns={is24h ? last24hColumns : columns}
        dataSource={data}
        pagination={false}
        bordered
        tableLayout='fixed'
        size='small'
        style={{fontSize: 8 }}
        summary={() => (
          <TotalRow
            confirmed={totalConfirmed}
            deaths={totalDeaths}
            recovered={totalRecovered}
          />
          ) }
      />
    </div>  
  )
}