import React from 'react';
import {
  Row,
  Col,
  Divider,
  Alert,
} from 'antd';
import { routeTo } from '../../utils/route';
import { COVIDAustraliaMap } from '../australia-map';
import { MainDivider } from '../main-divider';
import { CDRStatistics } from '../cdr-statistics';
import { CurrentStatus } from '../current-status';
import { TimeSeriesGraph } from '../time-series-graph';
import { ComparisonGraph } from '../comparison-graph';
import { stateCodeToName } from '../../constants/states';
import { AusTestConductedTable } from '../aus-test-conducted-table';

const getStateData = (ausCDRTData) => {
  return Object.keys(ausCDRTData).reduce((acc, code) => {
    if(code != 'AUS') {
      acc.push({
        ...ausCDRTData[code],
        code,
        state: stateCodeToName[code],
      })
    }  
    return acc;
  }, []);
}
export const AustraliaContainer = ({
  ausCDRTData,
  globalCases,
  ausHistoricalData,
  ausDailyHistoricalData,
  globalHistoricalData,
  ausTestConductedData,
}) => {
const stateCDRData = getStateData(ausCDRTData);
const testConductedData = getStateData(ausTestConductedData);
const onClick = (code) => {
    routeTo(code);
  }

  return (
    <>
        <MainDivider title='Worldwide' />
        <CDRStatistics {...globalCases} />
        <MainDivider title='Australia' />
        <CDRStatistics {...ausCDRTData.AUS} />
        <div style={{ margin: '24px 0'}}>
          <Row>
            <Col span={24}>
                <Divider orientation='center'>
                  Current Status
                </Divider>
                <CurrentStatus
                  data={stateCDRData}
                  total={ausCDRTData.AUS}
                  onClick={onClick}
                />
              </Col>
           </Row>
           <Row>
            <Col span={24}>
                <Divider orientation='center'>
                  Total Test Conducted
                </Divider>
                <AusTestConductedTable
                  data={testConductedData}
                  onClick={onClick}
                />
              </Col>
           </Row>
          <Row style={{ marginTop: '24px'}}>
            <Col span={18} style={{ margin: '0 auto', cursor: 'pointer'}}>
              <Alert
                message="Click the state in the map for specific statistics."
                type="info"
                showIcon
              />
              <div className='australia-map'>
                <COVIDAustraliaMap
                  data={stateCDRData}
                  total={ausCDRTData.AUS}
                  onClick={onClick}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Divider orientation='center'>
                AUS vs Top 5 affected countries
              </Divider>
              <div style={{ height: 400}}>
                <ComparisonGraph
                  data={globalHistoricalData}
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
        </div>
    </>    
  );
}