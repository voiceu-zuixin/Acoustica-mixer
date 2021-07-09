import {
  Col,
  Divider,
  Row, Tag,
  Timeline, Typography,
  Button
} from 'antd';
import React from 'react';
import details from '../resume/resume.json';
// import { useHistory } from 'react-router-dom'
import { NavLink} from 'react-router-dom';

const { Title, Paragraph, Text, Link } = Typography;

export default function Projects() {
  // let history = useHistory()
 
  return (
    <Row>
      <Col>
        <Divider className='divider'>个人项目</Divider>
        <Timeline>
          {details.projects.map((job, idx) => {
            return (
              <Timeline.Item
                // 时间轴样式
                // dot={<HistoryOutlined />}
                className="avoid-break"
                key={`experience-${idx}`}
              >
                <Row justify="space-between">
                  <Col>
                    <Title level={4}>
                      {job.name}
                    </Title>
                  </Col>
                  <Col>
                    <Text strong >
                      <Button 
                      // type="primary"
                       size="small" >

                        <NavLink
                          to={job.website}
                          // target="_blank"
                          // style={{ color: 'white' }}
                          style={{ color: 'purple' }}
                        >
                          项目预览
                        </NavLink>
                        {/* 改用路由的方式 */}
                        {/* <Link
                          href={job.website}
                          target="_blank"
                          // style={{ color: 'white' }}
                          style={{ color: 'purple' }}
                        >
                          项目预览
                        </Link> */}


                      </Button>
                      {/* {job.startDate} - {job.endDate} */}
                    </Text>
                  </Col>
                </Row>
                <Text strong>简介：{job.introduction}</Text>
                <Paragraph>
                  技术栈:{' '}
                  {job.technologies.map((tech, idx) => (
                    <Tag color={tech[1]} key={`job-${idx}`}>
                      {tech[0]}
                    </Tag>
                  ))}
                </Paragraph>
                {job.highlights.map((highlight, idx) => (
                  <React.Fragment key={`highlight-${idx}`}>
                    {/* 如果有链接就是有文章，就返回一个可点击的，否则就是不可点击的 */}
                    {
                      highlight[1].length === 0 ? (
                        <Text>&#8226; {highlight}</Text>
                      ) : (
                        <Link
                          href={highlight[1]}
                          target="_blank"
                          style={{ color: 'purple' }}>
                          &#8226; {highlight[0]}
                        </Link>
                      )
                    }
                    <br></br>
                  </React.Fragment>
                ))}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
    </Row >
  );
}
