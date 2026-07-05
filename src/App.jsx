import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import { Container, Row, Col } from "reactstrap";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div className="app">
        <NavbarMain></NavbarMain>
        <div className="app-content">
          <Container>
            <Gallery></Gallery>
            <About></About>
            <Contact></Contact>
          </Container>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
