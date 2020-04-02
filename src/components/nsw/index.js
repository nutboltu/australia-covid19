import { Row, Col } from 'antd';
import { MainDivider } from '../main-divider';
import { CasesTable } from '../cases-table';
import { SourceOfInfection } from '../source-of-infection';
import { DailyCasesCalendar } from '../daily-cases-calendar';
import { SexAgeGroup } from '../sex-age-group';
import { LocalDistrictCases } from '../local-district-cases';
import { CasesStats } from '../cases-stats';

const stateName = 'New South Wales';

export const NSWContainer = ({
    nswSexAndAgeGroupData,
    nswLocalDistrictData,
    nswCasesData,
    nswTestedData,
    nswSouceOfInfectionData,
    statesCasesData
}) => {
    const nswStats = statesCasesData.find(item => item.location === stateName);
    const stats = {
        ...nswStats,
        ...nswCasesData,
    }
  return (
      <>
        <MainDivider title={stateName} />
        <CasesStats {...stats} />
        <div style={{ marginBottom: '64px'}}>
            <Row style={{ marginBottom: '32px'}} >
                <Col span={24}>
                <div style={{height: 300}}>
                    <DailyCasesCalendar stateName={stateName} />
                </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} lg={13} xl={11}>
                    <CasesTable data={nswTestedData} />
                </Col>
                <Col xs={24} lg={10} xl={11}>
                    <div style={{ height: 280, margin: '0 auto' }}>
                        <SourceOfInfection data={nswSouceOfInfectionData} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{margin: '0 auto' }}>
                    <div style={{ height: 400 }}>
                        <SexAgeGroup data={nswSexAndAgeGroupData} />
                    </div>
                </Col>
            </Row>
            <Row style={{ marginTop: '100px'}}>
                <Col span={24} style={{margin: '0 auto' }}>
                    <div style={{ height: 500 }}>
                        <LocalDistrictCases
                            data={nswLocalDistrictData}
                            title='Confirmed cases by Local Health District'
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </>
  );
}