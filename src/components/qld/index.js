import { Row, Col } from 'antd';
import { MainDivider } from '../main-divider';
import { CasesTable } from '../cases-table';
import { DailyCasesCalendar } from '../daily-cases-calendar';
import { LocalDistrictCases } from '../local-district-cases';
import { CasesStats } from '../cases-stats';

const stateName = 'Queensland';

export const QLDContainer = ({
    qldLocalDistrictData,
    qldTestedData,
    statesCasesData,
    qldCasesData
}) => {
    const qldStats = statesCasesData.find(item => item.location === stateName);
    const stats = {
        ...qldStats,
        ...qldCasesData,
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
                <Col span={24}>
                    <CasesTable data={qldTestedData} />
                </Col>
                {/* <Col xs={24} lg={10} xl={11}>
                    <div style={{ height: 280, margin: '0 auto' }}>
                        <SourceOfInfection data={qldSouceOfInfectionData} />
                    </div>
                </Col> */}
            </Row>
            <Row style={{ marginTop: '100px'}}>
                <Col span={24} style={{margin: '0 auto' }}>
                    <div style={{ height: 500 }}>
                        <LocalDistrictCases
                            data={qldLocalDistrictData}
                            title='Confirmed cases by HHS'
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </>
  );
};