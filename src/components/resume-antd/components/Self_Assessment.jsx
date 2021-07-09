import { Col, Divider, Row, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Text, } = Typography;

export default function SelfAssessment() {
  return (
    <Col className="avoid-break">
      <Divider>自我评价</Divider>
        {details.self_assessment.map((self_assessment, idx) => {
          return (
            <React.Fragment key={`self_assessment-${idx}`}>
              <Row justify="space-between">
                <Text className='self_assessment'>
                  &#8226; {self_assessment}
                </Text>
              </Row>
            </React.Fragment>
          );
        })}
    </Col>
  );
}
