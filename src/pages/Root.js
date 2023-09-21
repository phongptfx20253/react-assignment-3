// Import bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Component
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import LiveChat from "../components/livechat/LiveChat";

const RootLayout = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12">
            <NavBar />
          </Col>
          <Col md="auto">
            <main>
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>
      <LiveChat />
      <Footer />
    </>
  );
};

export default RootLayout;
