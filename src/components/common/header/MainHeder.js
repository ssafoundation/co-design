import mainLogo from "@/assets/image/mainLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
const MainHeder = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header-main-area">
      <Container>
        <div className="main-header-inner-container">
          <div className="header-logo">
            <Link href="/">
              <Image src={mainLogo} alt="" />
            </Link>
          </div>
          <div
            className={
              toggle ? "toggle-menu-button active" : "toggle-menu-button "
            }
            onClick={() => setToggle(!toggle)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={
              toggle
                ? "header-navbar-right mobile-menu-show"
                : "header-navbar-right mobile-menu-hide"
            }
          >
            <div className="navbar-menu-list">
              <ul>
                <li>
                  <Link href="/">Explore</Link>
                </li>
                <li>
                  <Link href="/">Discover</Link>
                </li>
                <li>
                  <Link href="/">For Professionals</Link>
                </li>
                <Dropdown className="bootstrap-dropdown-button-wrap">
                  <Dropdown.Toggle id="" variant="secondary">
                    <li>
                      <Link href="/">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                      </Link>
                    </li>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-list-area">
                    <Link href="/" className="nav-link">
                      About Click Motto
                    </Link>
                    <Link href="/" className="nav-link">
                      Pricing
                    </Link>
                    <Link href="/" className="nav-link">
                      License
                    </Link>
                    <Link href="/" className="nav-link">
                      Partnerships
                    </Link>{" "}
                    <Link href="/" className="nav-link">
                      Blog
                    </Link>{" "}
                    <Link href="/" className="nav-link">
                      Help
                    </Link>{" "}
                    <Link href="/" className="nav-link">
                      Join The Team
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <li>
                  <button className="btn btn-outline-secondary">
                    Submit Photos
                  </button>
                </li>
              </ul>
            </div>
            <div className="navbar-account-info">
              <button className="secondary-button">Sign in</button>
              <button className="primary-button">Sign up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeder;
