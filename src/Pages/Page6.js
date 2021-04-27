import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import dumbell from "../assets/img/dumbell.svg";
import strength from "../assets/img/strength.svg";

const Page6 = () => {
  return (
    <Container fluid className="d-flex comparision">
      <Container>
        <Row className="pt-5">
          <Col md={11} xs={12} className="mx-auto">
            <Row>
              <Col md={6}>
                <div className="option">
                  <div className="icon">
                    <img src={strength} alt="Fittly" />
                  </div>
                  <h5 className="pro">fittly for FitPros</h5>
                  <div style={{ minHeight: "250px" }}>
                    <p>Create a Profile that shows off your skills</p>
                    <p>Find Job Opportunities that match those skills</p>
                    <p>
                      Discover the tools you need to get certified, grow your
                      business and more
                    </p>
                  </div>
                  <button className="btn btnOrange align-self-center align-self-sm-start ">
                    Join the waitlist
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="option">
                  <div className="icon">
                    <img src={dumbell} alt="Fittly" />
                  </div>
                  <h5 className="employee">fittly for Employers</h5>
                  <div style={{ minHeight: "250px" }}>
                    <p>Create a Profile to show your brand</p>
                    <p>
                      Post Jobs for trainers, instructors, or other fitness
                      talent
                    </p>
                    <p>
                      Parther with other tools to help your business grow and
                      succeed
                    </p>
                  </div>
                  <button className="btn btnBlue align-self-center align-self-sm-start ">
                    Request a contact
                  </button>
                </div>
                <p className="note">
                  Sign up for our waiting list to receive personalized
                  recruitment services to find your best hires
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Page6;
