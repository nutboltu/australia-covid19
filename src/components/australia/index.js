import React from 'react';
import {
  Row,
  Col,
  Divider,
  Alert,
  Spin,
} from 'antd';
import { routeTo } from '../../utils/route';
import { COVIDAustraliaMap } from '../australia-map';
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
  
const onClick = (code) => {
    routeTo(code);
  }

  return (
    <>
        <MainDivider title='Worldwide' />
        <CDRStatistics {...globalCases} />
        <MainDivider title='Australia' />
        <CDRStatistics {...ausCasesData} />
        <div style={{ margin: '24px 0'}}>
          <Row>
            <Col span={18} style={{ margin: '0 auto', cursor: 'pointer'}}>
              <Alert
                message="Click the state in the map for specific statistics."
                type="info"
                showIcon
              />
              <div className='australia-map'>
                <COVIDAustraliaMap
                  data={statesCasesData}
                  total={total}
                  onClick={onClick}
                />
              </div>
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
    </>    
  );
}