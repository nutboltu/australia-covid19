import { Row, Col, Divider } from 'antd';
import { useCurrentWidth } from 'react-socks';
import { MainDivider } from '../main-divider';
import { SourceOfInfection } from '../source-of-infection';
import { DailyCasesCalendar } from '../daily-cases-calendar';
import { SexAgeGroup } from '../sex-age-group';
import { AgeGroup } from '../age-group';
import { LocalDistrictCases } from '../local-district-cases';
import { CDRStatistics } from '../cdr-statistics';
import { TimeSeriesGraph } from '../time-series-graph';
import { StateInfo } from '../state-info';

export const StateContainer = ({
    stateName,
    ageGroupData,
    sexAndAgeGroupData,
    localDistrictData,
    CDRData,
    testedData,
    sourceOfInfectionData,
    historicalData,
    activeCases,
}) => {
  const width = useCurrentWidth();
  const statesInfo = {
    ...activeCases,
    ...testedData,
  }
  const title = width < 500 && stateName == 'Australian Capital Territory' ? 'ACT' : stateName;
  return (
      <>
        <MainDivider title={title} />
        <CDRStatistics {...CDRData} />
        <div style={{ marginBottom: '64px'}}>
          <Row>
            <Col span={24}>
              <StateInfo data={statesInfo} title={title} />
            </Col>
          </Row>
          {
            historicalData &&
              <Row>
                <Col span={24}>
                  <Divider orientation='center'>
                    Cumulative cases
                  </Divider>
                  <div style={{ height: 400}}>
                      <TimeSeriesGraph
                        data={historicalData}
                      />
                  </div>
                </Col>
            </Row>
          }
          <Row gutter={16}>
            {
              sourceOfInfectionData &&
                <Col span={24}>
                  <div style={{ height: 400, margin: '0 auto' }}>
                      <SourceOfInfection data={sourceOfInfectionData} />
                  </div>
                </Col>
            }
          </Row>
          {
            ageGroupData &&
              <Row>
                <Col span={24} style={{margin: '0 auto' }}>
                    <div style={{ height: 400 }}>
                        <AgeGroup data={ageGroupData} />
                    </div>
                </Col>
              </Row>
          }
          {
            sexAndAgeGroupData &&
            <Row>
              <Col span={24} style={{margin: '0 auto' }}>
                  <div style={{ height: 400 }}>
                      <SexAgeGroup data={sexAndAgeGroupData} />
                  </div>
              </Col>
            </Row>
          }
          {
            localDistrictData &&
            <Row style={{ marginTop: '100px'}}>
              <Col span={24} style={{margin: '0 auto' }}>
                  <div style={{ height: 550 }}>
                      <LocalDistrictCases
                          data={localDistrictData}
                          title='Confirmed cases by Local Health District'
                      />
                  </div>
              </Col>
            </Row>
          }
          {
            width > 600 &&
            <Row style={{ marginTop: '48px'}} >
              <Col span={24}>
              <div style={{height: 300}}>
                  <DailyCasesCalendar stateName={stateName} />
              </div>
              </Col>
            </Row>
          }
        </div>
    </>
  );
}