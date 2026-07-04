import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import { Container, Row, Col } from "reactstrap";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <div className="app">
        <NavbarMain></NavbarMain>
        <div className="app-content">
          <Container>
            <Gallery></Gallery>
          </Container>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
