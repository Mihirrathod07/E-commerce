import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "./shop.png";
import "./style.css";
import { NavLink } from "react-router-dom";
function NavScrollExample() {
  return (
    <div
      class="nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0px 0px 10px 0px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div class="Container">
          <ul>
            <li>
              <NavLink className="nav-bar-link" Link to="/">
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-bar-link" to="/Shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/Blog">
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-bar-link" to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
}

export default NavScrollExample;
