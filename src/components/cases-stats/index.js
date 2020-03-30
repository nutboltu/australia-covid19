import React from 'react';
import { Row, Col, Statistic, Typography } from 'antd';
const { Text } = Typography;

export const CasesStats = ({ confirmed, deaths, recovered }) => (
  <div>
    <Row gutter={16}>
      <Col span={8}>
        <Statistic title={<Text type="warning">Confirmed</Text>} value={confirmed} />
      </Col>
      <Col span={8}>
        <Statistic title={<Text type="danger">Deaths</Text>} value={deaths} />
      </Col>
      <Col span={8}>
        <Statistic title={<Text>Recovered</Text>} value={recovered} />
      </Col>
    </Row>
  </div>
);