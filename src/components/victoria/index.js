import { Row, Col } from 'antd';
import { MainDivider } from '../main-divider';
import { CasesTable } from '../cases-table';
import { SourceOfInfection } from '../source-of-infection';
import { SexAgeGroup } from '../sex-age-group';
import vicSexAndAgeGroupData from '../../data/vic/sex_age_group.json';
import vicSouceOfInfectionData from '../../data/vic/sources_of_infection.json';
import vicCasesData from '../../data/vic/cases.json';

export const VICContainer = () => {
  return (
    <>
        <MainDivider title='Victoria' />
        <div style={{ marginBottom: '64px'}}>
            <Row gutter={16}>
                <Col xs={24} lg={13} xl={11}>
                    <CasesTable data={vicCasesData} />
                </Col>
                <Col xs={24} lg={10} xl={11}>
                    <div style={{ height: 250, width: 500, margin: '0 auto' }}>
                        <SourceOfInfection data={vicSouceOfInfectionData} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{margin: '0 auto' }}>
                    <div style={{ height: 400, width: 800 }}>
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