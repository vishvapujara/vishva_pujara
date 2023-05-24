import * as React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import resume from '../../data/vishvapujara.json'
import '../../styles/components/resume.css'

const Resume = () => {
  return (
    <Container className="resume" id={`resume-${resume.slug}`}>
      <RenderIntro resume={resume} />
      <RenderSummary resume={resume} />
      <RenderSkills resume={resume} />
      <RenderWorkday resume={resume} />
      <RenderExperiences resume={resume} />
      {/* <RenderPortfolio resume={resume} /> */}
      <RenderEducation resume={resume} />
      <RenderCertifications resume={resume} />
    </Container>
  )
}
export default Resume

function RenderIntro({ resume }) {

  return (
    <Row>
      <Col md={9} lg={9} xl={9} xxl={9} className="heading">
        <h2>{resume.name}</h2>
        <Card.Title>{resume.subTitle}</Card.Title>
        <Card.Subtitle>{resume.email} | {resume.contact}</Card.Subtitle>
      </Col>
    </Row>
  )
}

function RenderSummary({ resume }) {
  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>Professional Summary</h5>
        <p>{resume.professionalSummary}</p>
      </Col>
    </Row>
  )
}

function RenderSkills({ resume }) {
  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>Skills</h5>
        {resume.skills.map((skill) => (
          <>
            <h5>{skill.title}</h5>
            <ul>
              {skill.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        ))}
      </Col>
    </Row>
  )
}

function RenderWorkday({ resume }) {
  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>{resume.workday.title}</h5>
        <ul>
          {resume.workday.duties.map((duty) => (
            <li>{duty}</li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

function RenderExperiences({ resume }) {
  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>{resume.experience.title}</h5>
        {resume.experience.companies.map((company) => (
          <>
            <h5>{company.company}</h5>
            {/* <ul>
              {company.duties.map((duty) => (
                <li>{duty}</li>
              ))}
            </ul> */}
          </>
        ))}
      </Col>
    </Row>
  )
}

function RenderPortfolio({ resume }) {
  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>{resume.portfolio.title}</h5>
        {resume.portfolio.projects.map((project) => (
          <>
            <h6>{project.project}</h6>
            <ul>
              {project.duties.map((duty) => (
                <li>{duty}</li>
              ))}
            </ul>
          </>
        ))}
      </Col>
    </Row>
  )
}

function RenderEducation({ resume }) {

  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>{resume.education.title}</h5>

        {resume.education.degrees.map((edu) => (
          <>
            <h5>{edu.degree} with {edu.grades}</h5>
            <p>
              {edu.institution} during {edu.duration}
            </p>
          </>
        ))}
      </Col>
    </Row>
  )
}

function RenderCertifications({ resume }) {
  return (
    <Row>
      <Col>
        <h5 className='resume-section-title'>Certifications</h5>
        <ul>
          {resume.certifications.map((certification) => (
            <li>
              <a target='_blank' rel="noreferrer" href={certification.url}>{certification.title}</a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}
