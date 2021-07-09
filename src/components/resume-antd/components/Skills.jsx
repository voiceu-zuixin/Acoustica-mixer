import { Col, Descriptions, Divider, Row } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

export default function Skills() {
  return (
    <Row>
      <Col>
        <Divider
         className='divider_skill'
         >技能及其他</Divider>
        <Descriptions size="small" bordered>
          {details.skills1000.map((item, idx) => (
            <Descriptions.Item label={item.name} span={3} key={`skill-${idx}`}>
              {item.describe}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Col>
    </Row>
  );
}
