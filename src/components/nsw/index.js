import { Row, Col } from 'antd';
import { MainDivider } from '../main-divider';
import { CasesTable } from '../cases-table';
import { SourceOfInfection } from '../source-of-infection';
import { DailyCasesCalendar } from '../daily-cases-calendar';
import { SexAgeGroup } from '../sex-age-group';
import { LocalDistrictCases } from '../local-district-cases';
import nswSexAndAgeGroupData from '../../data/nsw/sex_age_group.json';
import nswLocalDistrictData from '../../data/nsw/local_district_cases.json';
import nswCasesData from '../../data/nsw/cases.json';
import nswTestedData from '../../data/nsw/tested.json';
import nswSouceOfInfectionData from '../../data/nsw/sources_of_infection.json';
import { CasesStats } from '../cases-stats';

export const NSWContainer = () => {
  return (
      <>
        <MainDivider title='New South Wales' />
        <CasesStats {...nswCasesData} />
        <div style={{ marginBottom: '64px'}}>
            <Row style={{ marginBottom: '32px'}} >
                <Col span={24}>
                <div style={{height: 300}}>
                    <DailyCasesCalendar stateName='New South Wales' />
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