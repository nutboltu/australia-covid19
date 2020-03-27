import { Row, Col } from 'antd';
import { MainDivider } from '../main-divider';
import { NSWCasesTable } from './nsw-cases-table';
import { NSWConfirmedCasesTable } from './nsw-confirmed-cases-table';
import { NSWSexAgeGroup } from './nsw-sex-age-group';
import nswSexAndAgeGroupData from '../../data/nsw/sex_age_group.json';

export const NSWContainer = () => {
  return (
      <>
        <MainDivider title='New South Wales' />
        <Row gutter={16} offset={1}>
            <Col xs={24} lg={13} xl={11}>
                <NSWCasesTable />
            </Col>
            <Col xs={24} lg={10} xl={11}>
                <NSWConfirmedCasesTable />
            </Col>
        </Row>
        <Row>
            <Col span={12} offset={5}>
                <div style={{ height: 400, width: 800 }}>
                    <NSWSexAgeGroup data={nswSexAndAgeGroupData} />
                </div>
            </Col>
        </Row>
    </>
  );
}