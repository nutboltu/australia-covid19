import React, { useState } from 'react';
import { useCurrentWidth } from 'react-socks';
import {
  Row,
  Col,
  Divider,
  Alert,
  Spin,
} from 'antd';
import { routeTo } from '../../utils/route';
import { AustraliaMap } from '../australia-map';
import { MainDivider } from '../main-divider';
import { CDRStatistics } from '../cdr-statistics';
import { CurrentStatus } from '../current-status';
import { TimeSeriesGraph } from '../time-series-graph';

export const AustraliaContainer = ({
  ausCasesData,
  statesCasesData,
  statesCasesTodayData,
  globalCases,
  ausHistoricalData,
  ausDailyHistoricalData,
}) => {
  const [loading, setLoading] = useState(false);
  const width = useCurrentWidth();

  const total = statesCasesData.reduce((acc, item) => {
      acc.confirmed += item.confirmed;
      acc.deaths += item.deaths;
      acc.recovered += item.recovered;
      
    return acc;
  }, { confirmed: 0, deaths: 0, recovered: 0 });
  const totalToday = statesCasesTodayData.reduce((acc, item) => {
    acc.confirmed += item.confirmed;
    acc.deaths += item.deaths;
    acc.recovered += item.recovered;
    
  return acc;
}, { confirmed: 0, deaths: 0, recovered: 0 });
  let mapMaxValue = 0;
  const mapData = statesCasesData.reduce((acc, item) => {
  const per = (item.confirmed * 100) / total.confirmed;
    acc.push({
      id: item.code,
      value: item.confirmed,
      confirmed: item.confirmed,
      deaths: item.deaths,
      percentage: `${per.toFixed(2)}%`
    });
    mapMaxValue = Math.max(mapMaxValue, item.confirmed);
    return acc;
  }, []);

  const onClick = (code) => {
    routeTo(code);
  }
  return (
    <Spin spinning={loading}>
        <MainDivider title='Worldwide' />
        <CDRStatistics {...globalCases} />
        <MainDivider title='Australia' />
        <CDRStatistics {...ausCasesData} />
        <div style={{ margin: '24px 0'}}>
          <Row>
            <Col style={{ margin: '0 auto', cursor: 'pointer'}}>
              <Alert
                message="Click the state in the map for specific statistics (NSW, VIC and QLD available)"
                type="info"
                showIcon
              />
              {
                width > 550
                ?
                <div className='australia-map'>
                    <AustraliaMap
                      data={mapData}
                      mapHandler={(event) => onClick(event.data.id)}
                      scale={650}
                      translation={[ -2.10, -0.2 ]}
                    />
                  </div>
                  : 
                  <div className='australia-map'>
                      <AustraliaMap
                        data={mapData}
                        mapHandler={(event) => onClick(event.data.id)}
                        scale={400}
                        translation={[-2.35, -0.1]}
                      />
                  </div>
              }
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Divider orientation='center'>
                Cumulative cases
              </Divider>
              <div style={{ height: 400}}>
                  <TimeSeriesGraph
                    data={ausHistoricalData}
                  />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Divider orientation='center'>
                Daily cases
              </Divider>
              <div style={{ height: 400}}>
                  <TimeSeriesGraph
                    data={ausDailyHistoricalData}
                  />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
                <Divider orientation='center'>
                  Current Status*
                </Divider>
                <CurrentStatus
                  data={statesCasesData}
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
                data={statesCasesTodayData}
                onClick={onClick}
                totalConfirmed={totalToday.confirmed}
                totalDeaths={totalToday.deaths}
                totalRecovered={totalToday.recovered}
              />
            </Col>
          </Row>
        </div>
     </Spin>
  );
}