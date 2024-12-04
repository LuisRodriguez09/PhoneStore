import {
    Box,
    Column,
    FooterLink,
    Social,
    OuterCardStyle,
    SubContainerStyle,
    SubInputStyle,
    SubButtonStyle,
  } from "./style";
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
  
  
  function Footer() {
  
    return (
      <Box>
        <Container>
          <Row>
            <Col>
              <div>
                <h6 className="mb-4">SIGN UP FOR OUR NEWSLETTER</h6>
                
                <FooterLink href="/">
                  <Social className="me-3">
                    <Facebook></Facebook>
                  </Social>
                </FooterLink>
                <FooterLink href="/">
                  <Social className="me-3">
                    <Instagram></Instagram>
                  </Social>
                </FooterLink>
                <FooterLink href="/">
                  <Social className="me-3">
                    <Twitter></Twitter>
                  </Social>
                </FooterLink>
              </div>
            </Col>
            <Col>
              <h6 className="mb-4">Pages</h6>
              <Column>
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/">About</FooterLink>
                <FooterLink href="/">Women</FooterLink>
                <FooterLink href="/">Men</FooterLink>
                <FooterLink href="/">Accessories</FooterLink>
                <FooterLink href="/">Contact</FooterLink>
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
                  12345 Street name, CaFooterLinkfornia
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
  