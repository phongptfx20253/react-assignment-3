import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./Footer.module.css";

const DUMMY_LINK = [
  [
    { id: "f1", name: "Help & Contact Us", link: "#" },
    { id: "f2", name: "Returns & Refunds", link: "#" },
    { id: "f3", name: "Online Stores", link: "#" },
    { id: "f4", name: "Terms & Conditions", link: "#" },
  ],
  [
    { id: "f5", name: "What We Do", link: "#" },
    { id: "f6", name: "Available Services", link: "#" },
    { id: "f7", name: "Lastest Posts", link: "#" },
    { id: "f8", name: "FAQs", link: "#" },
  ],
  [
    { id: "f9", name: "Twitter", link: "#" },
    { id: "f10", name: "Instagram", link: "#" },
    { id: "f11", name: "Facebook", link: "#" },
    { id: "f12", name: "Pinterest", link: "#" },
  ],
];

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.footerContainer}>
        <Row className="py-lg-5">
          <Col md="4" className={classes.colFooter}>
            <h4>CUSTOMER SERVICES</h4>
            {DUMMY_LINK[0].map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </Col>{" "}
          <Col md="4" className={classes.colFooter}>
            <h4>COMPANY</h4>
            {DUMMY_LINK[1].map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </Col>{" "}
          <Col md="4" className={classes.colFooter}>
            <h4>SOCIAL MEDIA</h4>
            {DUMMY_LINK[2].map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
