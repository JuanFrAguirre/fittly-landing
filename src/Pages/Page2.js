import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import icon01 from "../assets/img/icons_header/01.svg";
import icon02 from "../assets/img/icons_header/02.svg";
import icon03 from "../assets/img/icons_header/03.svg";
import icon04 from "../assets/img/icons_header/04.svg";

const Page2 = () => {
  const options = [
    {
      titulo: "Lack of quality jobs",
      descrip:
        "Which means hours spent online searching for jobs and finding nothing that relates to your career/experience",
      icon: icon01,
      id: 1,
    },
    {
      titulo: "Too much effort on social media",
      descrip:
        "And somehow you’re still lacking the engagement you need to grow your business or land a job",
      icon: icon02,
      id: 3,
    },
    {
      titulo: "Long hours and little pay",
      descrip:
        "Are you tired of working nonstop and still not making enough money to make ends meet",
      icon: icon03,
      id: 3,
    },
    {
      titulo: "Uncertainty and slow growth",
      descrip:
        "You’re not sure wether you can maintain your client base or won’t know how to grow your business",
      icon: icon04,
      id: 4,
    },
  ];

  return (
    <Container fluid className="d-flex advantages">
      <Container>
        <Row className="pt-5">
          <Col className="col-12 col-md-7 d-none d-flex justify-content-center justify-content-sm-start">
            <h2 className="title text-md-left text-center">
              We know Working in Fitness can be tough
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} className="mx-auto">
            <Row>
              {options.map((item) => (
                <Col md={6} xs={12} key={item.id} className="mb-5">
                  <Row>
                    <Col
                      md={2}
                      xs={12}
                      className="d-flex justify-content-center justify-content-sm-start pb-3"
                    >
                      <div className="iconAdvantage">
                        <img src={item.icon} alt="Fittly" className="logo" />
                      </div>
                    </Col>
                    <Col md={10} xs={12}>
                      {" "}
                      <h6 className="text-center text-sm-left titleOption">
                        {item.titulo}
                      </h6>
                      <p className="text-center text-sm-left subTitleOption">
                        {item.descrip}
                      </p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Page2;
