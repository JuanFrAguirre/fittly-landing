import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo_header.svg";

import ig from "../assets/img/socialmedia/ig.svg";
import tw from "../assets/img/socialmedia/tw.svg";
import yt from "../assets/img/socialmedia/yt.svg";

const Page7 = () => {
  return (
    <>
      <Container fluid className="footer--container">
        <Container className="footer">
          <Row className="footer__subscription">
            <Col className="footer__subscription--text" md={12} lg={8}>
              <h4>
                Sign up today for exclusive access to our premium subscription
                for your <span>first 3 months</span>
              </h4>
              <div className="footer__subscription--input">
                <input type="text" placeholder="Your work email address" />
                <button>Join the whitelist</button>
              </div>
            </Col>
            <Col className="footer__subscription--img" md={0} lg={4}></Col>
          </Row>
          <Row className="footer_bar">
            <Col
              md={3}
              xs={12}
              className="text-sm-left text-center order-0 order-sm-0"
            >
              <img src={logo} alt="Fittly" className="logo" />
            </Col>
            <Col md={6} xs={12} className="text-center order-2 order-sm-1">
              <p className="copyright">© 2021 Fittly</p>
            </Col>
            <Col
              md={3}
              xs={12}
              className="text-sm-right text-center pt-2 order-1 order-sm-2"
            >
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item p-1">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social_media_link"
                  >
                    <img src={ig} style={{ height: "10px" }} alt="Instagram" />
                  </a>
                </li>
                <li className="list-inline-item p-1">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social_media_link"
                  >
                    <img src={tw} alt="Twitter" />
                  </a>
                </li>
                <li className="list-inline-item p-1">
                  <a
                    href="https://yotube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social_media_link"
                  >
                    <img src={yt} alt="YouTube" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Page7;
