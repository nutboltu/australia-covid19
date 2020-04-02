import { Row, Col } from 'antd';
import { MainDivider } from '../main-divider';
import { CasesTable } from '../cases-table';
import { SourceOfInfection } from '../source-of-infection';
import { SexAgeGroup } from '../sex-age-group';
import { CasesStats } from '../cases-stats';
import { DailyCasesCalendar } from '../daily-cases-calendar';

export const VICContainer = ({
    vicSexAndAgeGroupData,
    vicSouceOfInfectionData,
    vicCasesData,
    statesCasesData,
}) => {
    const vicStats = statesCasesData.find(item => item.location === 'Victoria');
    return (
        <>
            <MainDivider title='Victoria' />
            <CasesStats {...vicStats} />
            <div style={{ marginBottom: '64px'}}>
                <Row style={{ marginBottom: '32px'}} >
                    <Col span={24}>
                    <div style={{height: 300}}>
                        <DailyCasesCalendar stateName='Victoria' />
                    </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} lg={13} xl={11}>
                        <CasesTable data={vicCasesData} />
                    </Col>
                    <Col xs={24} lg={10} xl={11}>
                        <div style={{ height: 280, margin: '0 auto' }}>
                            <SourceOfInfection data={vicSouceOfInfectionData} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{margin: '0 auto' }}>
                        <div style={{ height: 400 }}>
                            <SexAgeGroup data={vicSexAndAgeGroupData} />
                        </div>
                    </Col>
                </Row>
                {/* <Row style={{ marginTop: '100px'}}>
                    <Col style={{margin: '0 auto' }}>
                        <div style={{ height: 600, width: 900 }}>
                            <NSWLocalDistrictCases data={nswLocalDistrictData} />
                        </div>
                    </Col>
                </Row> */}
            </div>
        </>
    );
}