import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-1">
          <Col lg="8">
            <h1 className="display-4 mb-2"> Portfolio </h1>{" "}
            <hr className="t_border my-2 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-1">
          <Col lg="9">
            <h4>UI developer</h4>
            <h5>Blue Space Technologies Inc. <span style={{ fontWeight: 400 }}>Houston, TX.</span></h5>
            <p style={{ fontWeight: 500 }}>Aug, 2023 - Present</p>
            <p> <span style={{ fontWeight: 600 }}>Description: </span> Blue Space Tech implements outsourcing projects and internal applications as well.
              I’m working on one of the internal portals as a User Interface developer to develop dynamic and single page applications using Angular and react frameworks.</p>
            <p> <span style={{ fontWeight: 600 }}>Job duties: </span> •	I'm inovelved in creating and maintain Single page and responsive web applications
              using React.js, Angular, and Node.js.Designed and implemented RESTful APIs and integrated MongoDB for data storage. Created and managed CMS-based applications,
              ensuring seamless content updates.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="9">
            <h4>UI developer </h4> 
            <h5>Supple Soft Inc. <span style={{ fontWeight: 400 }}>Gurugram, India.</span></h5>
            <p style={{ fontWeight: 500 }}>Dec, 2020 - Jun, 2022</p>
            <p> <span style={{ fontWeight: 600 }}>Description: </span> Supple Soft Inc. implements and supports lot of applications.
              I’m working on couple of the internal applications as a User Interface developer to create dynamic and single page applications
              using Angular and react frameworks.</p>
            <p> <span style={{ fontWeight: 600 }}>Job duties: </span> •	I've started my career as a UI developer and Inspired to create web applications that are user-friendly and visually appealing.
              I am a full-stack developer with experience in both front-end and back-end development.
              using React.js, Angular, and Node.js. Tried to be involved to learn RESTful APIs and integrated MongoDB for data storage. Created and managed CMS-based applications,
              ensuring seamless content updates.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
