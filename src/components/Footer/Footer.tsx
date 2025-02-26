import { Col, Container, Row } from "react-bootstrap";
import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";
import "../../style.css";
import { Box, Column, FooterLink, Social } from "./Styles";

function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          <Col>
            <div>
              <h6 className="mb-4">SIGN UP FOR OUR NEWSLETTER</h6>

              <FooterLink>
                <Social className="me-3">
                  <Facebook></Facebook>
                </Social>
              </FooterLink>
              <FooterLink>
                <Social className="me-3">
                  <Instagram></Instagram>
                </Social>
              </FooterLink>
              <FooterLink>
                <Social className="me-3">
                  <Twitter></Twitter>
                </Social>
              </FooterLink>
            </div>
          </Col>
          <Col>
            <h6 className="mb-4">Pages</h6>
            <Column>
              <FooterLink>Home</FooterLink>
              <FooterLink>About</FooterLink>
              <FooterLink>Women</FooterLink>
              <FooterLink>Men</FooterLink>
              <FooterLink>Accessories</FooterLink>
              <FooterLink>Contact</FooterLink>
            </Column>
            <Column>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
            </Column>
          </Col>
          <Col>
            <h6 className="mb-4">CONTACTO</h6>
            <Column>
              <FooterLink>
                <GeoAltFill className="me-2"></GeoAltFill>
                C. Libertad 514, Zona Centro, 31000 Chihuahua, Chih.
              </FooterLink>
              <FooterLink>
                <EnvelopeFill className="me-2"></EnvelopeFill>
                phoneplanet323@gmail.com
              </FooterLink>
              <FooterLink>
                <PhoneFill className="me-2"></PhoneFill>
                +52 639 117 6171
              </FooterLink>
            </Column>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;
