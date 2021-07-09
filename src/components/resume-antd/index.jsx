import { Card, Row } from 'antd';
import React from 'react';
import './App.less';
import Projects from './components/Projects.jsx';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import SelfAssessment from './components/Self_Assessment.jsx';


export default function ResumeAntd() {
  return (
    <div>


      <Row justify="center">
        <Card className="page">
          <Header />
          <Education />
          <Projects />
          <Skills />
          <SelfAssessment />

        </Card>
      </Row>
    </div>
  );
}
