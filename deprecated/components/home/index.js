import React from 'react';
import { Row, Col } from 'antd';
import { AusCases } from '../aus-cases';
import { NSWSexAgeGroup } from '../nsw-sex-age-group';
import { NSWSourceInfection } from '../nsw-source-infection';

import nswSexAndAgeGroupData from "../../data/australia/nsw/sex-age-group.json";
import nswSourceInfectionData from "../../data/australia/nsw/sources-of-infection.json";

export const Home = () => {
  return (
  <Row>
    <Col span={10}>
      <AusCases />
    </Col>
    <Col span={12}>
      <div style={{ height: 400, width: 700 }}>
        <NSWSexAgeGroup data={nswSexAndAgeGroupData} />
        <NSWSourceInfection data={nswSourceInfectionData} />
      </div>
    </Col>
  </Row>
  );
}