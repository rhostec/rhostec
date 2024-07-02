import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Mode from "../Mode";
import log from "../../images/logo.png";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import "react-bootstrap";
import { useTheme } from "../../utils/hooks";
import { StyledLink } from "../../utils/style/Atoms";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  const { theme } = useTheme();
  return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <StyledLink $theme={theme} to="/">
            <img src={log} alt="Logo" />
          </StyledLink>
          <br />
          <StyledLink $theme={theme} to="/">
            Leader à téléphonie mobile
          </StyledLink>
        </Navbar.Brand>
        <Navbar.Brand>
          <StyledLink $theme={theme} to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 20 20"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </StyledLink>
          <Mode />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Categories"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">
                  smartphones
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">pieces</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  matériels
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Marques"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">...</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">...</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">....</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Models"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">...</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">...</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">....</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Stack direction="horizontal" gap={2}>
              <Nav className="d-flex">
                <Nav.Link href="#home">
                  <Badge bg="light" text="dark">
                    <StyledLink $theme={theme} to="/survey/1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-book-half"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                      </svg>
                      BOUTIQUE
                    </StyledLink>
                  </Badge>
                </Nav.Link>
                <Nav.Link href="#home">
                  <Badge bg="light" text="dark">
                    <StyledLink $theme={theme} to="/Code">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-book-half"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                      </svg>
                      COURS
                    </StyledLink>
                  </Badge>
                </Nav.Link>
                <Nav.Link href="#home">
                  <Badge bg="light" text="dark">
                    {" "}
                    <StyledLink $theme={theme} to="/freelances">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-phone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                      </svg>
                      GSM
                    </StyledLink>
                  </Badge>
                </Nav.Link>
              </Nav>
            </Stack>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Recherche"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Recherche
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
