import { Table, Row, Col, Divider, Tag, Typography, Alert } from 'antd';
import Router from 'next/router';
import { states } from '../../constants/states';
import AustraliaMap from 'react-australia-map';
import { MainDivider } from '../main-divider';
import ausCasesData from '../../data/aus_cases.json';
const { Text } = Typography;
const columns = [
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: 150,
    render: text => <span>{text}</span>,
  },
  {
    title: () => <Text type='warning'>Confirmed</Text>,
    dataIndex: 'confirmed',
    key: 'confirmed',
    sorter: (a, b) => a.confirmed - b.confirmed,
  },
  {
    title: () => <Text type='warning'>Confirmed(24h)</Text>,
    dataIndex: 'last_24h_confirmed',
    key: 'last_24h_confirmed',
    sorter: (a, b) => a.last_24h_confirmed - b.last_24h_confirmed,
  },
  {
    title: () => <Text type='danger'>Deaths</Text>,
    dataIndex: 'deaths',
    key: 'deaths',
    sorter: (a, b) => a.deaths - b.deaths,
  },
  {
    title: <Text type='danger'>Deaths(24h)</Text>,
    dataIndex: 'last_24h_deaths',
    key: 'last_24h_deaths',
    sorter: (a, b) => a.last_24h_deaths - b.last_24h_deaths,
  },
  {
    title: <Text type='secondary'>Recovered</Text>,
    dataIndex: 'recovered',
    key: 'recovered',
    sorter: (a, b) => a.recovered - b.recovered,
  },
  {
    title: <Text type='secondary'>Recovered(24h)</Text>,
    dataIndex: 'last_24h_recovered',
    key: 'last_24h_recovered',
    sorter: (a, b) => a.last_24h_recovered - b.last_24h_recovered,
  },
];

export const AustraliaContainer = () => {
  const total = ausCasesData.reduce((acc, item) => {
      acc.confirmed += item.confirmed;
      acc.last_24h_confirmed += item.last_24h_confirmed;
      acc.deaths += item.deaths;
      acc.last_24h_deaths += item.last_24h_deaths;
      acc.recovered += item.recovered;
      acc.last_24h_recovered += item.last_24h_recovered;
    return acc;
  }, {
      confirmed: 0,
      last_24h_confirmed: 0,
      deaths: 0,
      last_24h_deaths: 0,
      recovered: 0,
      last_24h_recovered: 0,
  });
  const mapStyling = ausCasesData.reduce((acc, item) => {
    const state = states.find(i => i.name === item.location);
    const per = (item.confirmed * 100) / total.confirmed;
    acc[state.code] = {
        fill: '#86D9E1',
        showLabels: true,
        label: {
          name: ` ${state.code}\n ${item.confirmed} (${per.toFixed(2)}%)`,
          fontSize: 4,
          fill: 'black'
        }
    }
    return acc;
  }, {});
  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
    const path = `/${event.target.dataset.name.toLowerCase()}`;
    Router.push(path);
  }
  return (
    <>
        <MainDivider title='Australia' />
        <div style={{ marginBottom: '64px'}}>
          <Row>
              <Col style={{ margin: '0 auto', cursor: 'pointer' }}>
                <Alert
                  message="Click the state in the map for specific statistics (Only NSW and VIC available)"
                  type="info"
                  showIcon
                />
                <AustraliaMap
                    fill="#ffcb03"
                    stroke="#ffffff"
                    strokeWidth={1}
                    width={800}
                    height={600}
                    customize={mapStyling}
                    onClick={mapHandler}
                />
              </Col>
          </Row>
          <Row>
            <Col>
                <Divider orientation='center'>
                  Current Status*
                </Divider>
                <Table
                    columns={columns}
                    dataSource={ausCasesData}
                    pagination={false}
                    bordered
                    tableLayout='fixed'
                    size='small'
                    style={{fontSize: 8 }}
                    summary={() => (
                        <tr>
                        <th>Total</th>
                        <th>
                          <Tag color='orange'>
                              {total.confirmed}
                          </Tag>
                        </th>
                        <th>{total.last_24h_confirmed}</th>
                        <th>
                          <Tag color='volcano'>
                              {total.deaths}
                          </Tag>
                        </th>
                        <th>{total.last_24h_deaths}</th>
                        <th>
                          <Tag color='green'>
                              {total.recovered}
                          </Tag>
                        </th>
                        <th>{total.last_24h_recovered}</th>
                        </tr>
                        ) }
                    />
              </Col>
          </Row>
        </div>
     </>
  );
}