import { Row, Col, Divider } from 'antd';
import { MainDivider } from '../main-divider';
import { TestedTable } from '../tested-table';
import { SourceOfInfection } from '../source-of-infection';
import { DailyCasesCalendar } from '../daily-cases-calendar';
import { SexAgeGroup } from '../sex-age-group';
import { LocalDistrictCases } from '../local-district-cases';
import { CDRStatistics } from '../cdr-statistics';
import { TimeSeriesGraph } from '../time-series-graph';

export const StateContainer = ({
    stateName,
    sexAndAgeGroupData,
    localDistrictData,
    CDRData,
    testedData,
    souceOfInfectionData,
    historicalData,
}) => {
  return (
      <>
        <MainDivider title={stateName} />
        <CDRStatistics {...CDRData} />
        <div style={{ marginBottom: '64px'}}>
          <Row style={{ marginBottom: '32px'}} >
              <Col span={24}>
              <div style={{height: 300}}>
                  <DailyCasesCalendar stateName={stateName} />
              </div>
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
              testedData && 
                <Col xs={24} lg={13} xl={11}>
                  <TestedTable data={testedData} />
                </Col>
            }
            {
              souceOfInfectionData &&
                <Col xs={24} lg={10} xl={11}>
                  <div style={{ height: 280, margin: '0 auto' }}>
                      <SourceOfInfection data={souceOfInfectionData} />
                  </div>
                </Col>
            }
          </Row>
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
                  <div style={{ height: 500 }}>
                      <LocalDistrictCases
                          data={localDistrictData}
                          title='Confirmed cases by Local Health District'
                      />
                  </div>
              </Col>
            </Row>
          }
        </div>
    </>
  );
}