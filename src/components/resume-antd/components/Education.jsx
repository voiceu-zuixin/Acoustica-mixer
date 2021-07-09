import { HistoryOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Timeline, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Title, Text } = Typography;

export default function Education() {
  return (
    <Row >
      <Col style={{ width: '100%' }}>
        <Divider className='divider'>教育经历</Divider>
        <Timeline >
          {details.educations.map((education, idx) => {
            return (
              <Timeline.Item
                style={{ paddingBottom: '10px' }}
                dot={<HistoryOutlined />}
                key={`education-${idx}`}
              >
                <Row justify="space-between" >
                  <Col>
                    <Title level={5}>{education.institution}</Title>
                  </Col>
                  <Col>
                    <Text strong>
                      {education.startDate} - {education.endDate}
                    </Text>

                  </Col>
                </Row>
                <Text strong>
                  {education.studyType}&nbsp;
                </Text>
                {/* 将专业弱化显示 */}
                <Text >
                  - {education.major}
                </Text>
                <br />
                <Text>{education.graduationProject.award}</Text>
                <br />
                <Text>{education.graduationProject.skill}</Text>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
    </Row>
  );
}
