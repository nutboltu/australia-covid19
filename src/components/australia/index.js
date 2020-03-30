import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import {
  Row,
  Col,
  Divider,
  Alert,
  Spin,
  message,
} from 'antd';
import Router from 'next/router';
import { states } from '../../constants/states';
import { AustraliaMap } from '../australia-map';
import { MainDivider } from '../main-divider';
import { CasesStats } from '../cases-stats';
import { CurrentStatus } from '../current-status';
import ausCasesData from '../../data/aus_cases.json';
import globalCases from '../../data/global_cases.json';

export const AustraliaContainer = () => {
  const [loading, setLoading] = useState(false);
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
  let mapMaxValue = 0;
  const mapData = ausCasesData.reduce((acc, item) => {
  const state = states.find(i => i.name === item.location);
  const per = (item.confirmed * 100) / total.confirmed;
    acc.push({
      id: state.code,
      value: item.confirmed,
      confirmed: item.confirmed,
      deaths: item.deaths,
      percentage: `${per.toFixed(2)}%`
    });
    mapMaxValue = Math.max(mapMaxValue, item.confirmed);
    return acc;
  }, []);

  const onClick = (code) => {
    const path = `/${code.toLowerCase()}`;
    const routePaths = ['/nsw', '/vic'];
    if (routePaths.includes(path)) {
      setLoading(true);
      Router.push(path);
    } else {
      message.warning('Only NSW and VIC statistics are availabe now')
    }
  }
  return (
    <Spin spinning={loading}>
        <MainDivider title='Worldwide' />
        <CasesStats {...globalCases} />
        <MainDivider title='Australia' />
        <CasesStats {...total} />
        <div style={{ margin: '24px 0 64px'}}>
          <Row>
            <Col style={{ margin: '0 auto', cursor: 'pointer'}}>
              <Alert
                message="Click the state in the map for specific statistics (Only NSW and VIC available)"
                type="info"
                showIcon
              />
                <Breakpoint medium up>
                  <div style={{ height: 490}}>
                    <AustraliaMap
                      data={mapData}
                      mapHandler={(event) => onClick(event.data.id)}
                      scale={650}
                      translation={[ -2.10, -0.2 ]}
                    />
                  </div>
                </Breakpoint>
                <Breakpoint small down>
                  <div style={{ height: 310 }}>
                      <AustraliaMap
                        data={mapData}
                        mapHandler={(event) => onClick(event.data.id)}
                        scale={400}
                        translation={[-2.35, -0.1]}
                      />
                  </div>
                </Breakpoint>
            </Col>
          </Row>
          <Row>
            <Col>
                <Divider orientation='center'>
                  Current Status*
                </Divider>
                <CurrentStatus
                  data={ausCasesData}
                  onClick={onClick}
                  totalConfirmed={total.confirmed}
                  totalDeaths={total.deaths}
                  totalRecovered={total.recovered}
                />
              </Col>
           </Row>
          <Row>
            <Col>
              <Divider orientation='center'>
                Last 24 hours status
              </Divider>
              <CurrentStatus
                data={ausCasesData}
                onClick={onClick}
                totalConfirmed={total.last_24h_confirmed}
                totalDeaths={total.last_24h_deaths}
                totalRecovered={total.last_24h_recovered}
                is24h
              />
            </Col>
          </Row>
        </div>
     </Spin>
  );
}