import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Logo from '/images/kangacook-logo.png';
import Insta from '/images/instagram.svg';
import YouTube from '/images/youtube.svg';
import X from '/images/x.svg';
import Pinterest from '/images/pinterest.svg';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//add links to social media icons
export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="ingredients">Ingredients</Nav.Link>
              <NavDropdown title="Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item href="browse-recipes">
                  Browse Recipes
                </NavDropdown.Item>
                <NavDropdown.Item href="share-recipes">
                  Share a Recipe
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
          </Row>

          <div className="social-media">
            <Image className="insta" src={Insta} />
            <Image className="insta" src={YouTube} />
            <Image className="insta" src={X} />
            <Image className="insta" src={Pinterest} />
          </div>
        </Container>
      </Navbar>
      <div className="logo-container">
        <Image className="logo" src={Logo} />
      </div>
    </>
  );
}
