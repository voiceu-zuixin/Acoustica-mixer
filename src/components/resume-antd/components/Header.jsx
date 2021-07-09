import {
  EnvironmentFilled,
  // GithubOutlined,
  MailFilled,
  PhoneFilled,
  UserOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Col, Row, Space, Tag, Typography, Image } from 'antd';
import React from 'react';
import details from '../resume/resume.json';
import csdn from '../resume/csdn.svg'
import resumePic from '../resume/ye.jpg'

const { Title, Link, Paragraph,Text } = Typography;

export default function Header() {
  return (
    <Row justify="space-between">
      <Col>
        <Title level={2}>{details.basics.name.toUpperCase()}</Title>
        <Text strong>
          岗位意向：{details.basics.hope}
        </Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
          <Tag>
            <Link
              href={details.basics.blog_website}
              target="_blank"
              style={{ color: 'black' }}
            >
              <Icon component={csdn} /> &nbsp;&nbsp;
              {'fhz的技术博客'}
            </Link>
          </Tag>
          {/* <Tag icon={<GithubOutlined />} >
            <Link
              href={details.basics.profiles[1].url}
              target="_blank"
              style={{ color: 'black' }}
            >
              {details.basics.profiles[1].username}
            </Link>
          </Tag> */}
        </Space>
        <br />
        <Space
          direction="vertical"
          size={4}
        // size=''
        >
          <Space>
            <MailFilled />
            <Paragraph
              copyable={{ text: details.basics.email }}
              style={{ marginBottom: '0em' }}
            >
              {details.basics.email}
            </Paragraph>
          </Space>

          <Space>
            <PhoneFilled />
            <Paragraph
              copyable={{ text: details.basics.phone }}
              style={{ marginBottom: '0em' }}
            >
              {details.basics.phone}
            </Paragraph>
          </Space>
          {/* <Space>
            <UserOutlined /> {details.basics.sex_birth}
          </Space> */}

        </Space>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Space
          direction="vertical"
          size={4}
        // size=''
        >
          {/* <Space>
            <MailFilled />
            <Paragraph
              copyable={{ text: details.basics.email }}
              style={{ marginBottom: '0em' }}
            >
              {details.basics.email}
            </Paragraph>
          </Space>
          <Space>
            <PhoneFilled />
            <Paragraph
              copyable={{ text: details.basics.phone }}
              style={{ marginBottom: '0em' }}
            >
              {details.basics.phone}
            </Paragraph>
          </Space> */}
          <Space>
            <UserOutlined /> {details.basics.sex_birth}
          </Space>
          <Space>
            <EnvironmentFilled /> {details.basics.location.city}
          </Space>
          {/* <Space>

            <div className='blog'>

              <Link
                href={details.basics.profiles[0].url}
                target="_blank"
                style={{ color: 'black' }}
              >
                <Icon component={csdn} /> &nbsp;
                {'Voiceu的博客'}
              </Link>
            </div>
          </Space> */}

        </Space>

      </Col>
      <Col order={2}>
        <Image
          width={100}
          // height={150}
          src={resumePic}
          preview={false}
        />

      </Col>

    </Row>
  );
}
