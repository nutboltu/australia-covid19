import React from 'react';
import { Row, Col, Statistic, Typography } from 'antd';
const { Text } = Typography;

export const CDRStatistics = ({ confirmed, deaths, recovered }) => (
  <div>
    <Row gutter={16}>
      <Col span={9}>
        <Statistic title={<Text type="warning">Confirmed</Text>} value={confirmed} />
      </Col>
      <Col span={8}>
        <Statistic title={<Text type="danger">Deaths</Text>} value={deaths} />
      </Col>
      <Col span={7}>
        { 
          recovered ?
          <Statistic title={<Text>Recovered</Text>} value={recovered} />
          : null
        }
      </Col>
    </Row>
  </div>
);