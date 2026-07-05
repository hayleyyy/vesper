import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <div id="About">
      <Container>
        <Row>
          <Col md="4">
            <img src="/img/hayley1.webp"></img>
          </Col>
          <Col md="8">About me! Here's some stuff about me!</Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
