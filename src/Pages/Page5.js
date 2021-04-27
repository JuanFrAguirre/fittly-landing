import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import demo from "../assets/img/demo.svg";

const Page5 = () => {
  const options = [
    {
      titulo: "PROMOTE YOURSELF ONLINE",
      descrip:
        "Promote yourself online with a personalized fittly profile featuring your current social feeds, spotify playlists and fittly newsfeed",

      id: "1",
    },
    {
      titulo: "find meaningful work",
      descrip:
        "With jobs curated to your experience and interests from providers looking for talent just like you",

      id: "2",
    },
    {
      titulo: "upgrade your career",
      descrip:
        "With industry news, events, groups, and professionals development resources through specific feeds catered to your location and specialty",

      id: "3",
    },
    {
      titulo: "meet other professionals",
      descrip:
        "Locally and globally who can provide additional insight or collaboration for your career",

      id: "4",
    },
    {
      titulo: "Network outside of fittly",
      descrip:
        "Find user generated groups and events that you can be a part of!",

      id: "5",
    },
    {
      titulo: "Sell your services",
      descrip:
        "Use your fittly profile to schedule new client books and promote your existing reviews and testimonials to gain new business",

      id: "6",
    },
  ];

  return (
    <Container fluid className="d-flex canDoWithFittly">
      <Container>
        <Row className="pt-5">
          <Col md={6} xs={12}>
            <Row>
              <Col md={12}>
                <h2 className="title text-md-left text-center">
                  Everything you <br className="d-none d-sm-block" /> can do
                  with fittly
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Accordion defaultActiveKey="0" className="w-100">
                  {options.map((item) => (
                    <Card className="cardOptions">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey={item.id}
                        className="text-uppercase"
                      >
                        {item.titulo}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={item.id}>
                        <Card.Body>{item.descrip}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Col>

          <Col md={6} xs={12} className="d-flex justify-content-center">
            <img src={demo} alt="Fittly" className="demo" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Page5;
