import EmailIcon from "@/assets/icon/EmailIcon";
import LocationIcon from "@/assets/icon/LocationIcon";
import MapIcon from "@/assets/icon/MapIcon";
import TelephoneIcon from "@/assets/icon/TelephoneIcon";
import linkedinIcon from "@/assets/icon/social/Linkedin.svg";
import twitterIcon from "@/assets/icon/social/Twitter.svg";
import facebookIcon from "@/assets/icon/social/facebook.svg";
import whatsappIcon from "@/assets/icon/social/whatsapp.svg";
import youtubeIcon from "@/assets/icon/social/youtube.svg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
const MainFooter = () => {
  return (
    <div
      className="footer-main-area"
      style={{ backgroundImage: `url('/image/footer.png')` }}
    >
      <Container>
        <div className="footer-inner-container">
          <div className="footer-top-area">
            <Row>
              <Col lg="6">
                <div className="footer-left-content">
                  <div className="footer-title">
                    <h4>Contact information</h4>
                  </div>
                  <ul>
                    <li>
                      <LocationIcon />
                      <div>
                        <p>
                          17th Floor, 2nd Tower, Confidence Center, <br />
                          Shahjadpur, Dhaka-1212, Bangladesh
                        </p>
                        <a href="#" className="google-maps-location">
                          <MapIcon />
                          See on google map
                        </a>
                      </div>
                    </li>
                    <li>
                      <TelephoneIcon />
                      <p>+88 0258957629</p>
                    </li>
                    <li>
                      <EmailIcon />
                      <p>info@forenizence.com</p>
                    </li>
                  </ul>
                  <div className="social-link-area">
                    <a href="">
                      <Image src={linkedinIcon} alt="" />
                    </a>
                    <a href="">
                      <Image src={facebookIcon} alt="" />
                    </a>
                    <a href="">
                      <Image src={twitterIcon} alt="" />
                    </a>
                    <a href="">
                      <Image src={youtubeIcon} alt="" />
                    </a>
                    <a href="">
                      <Image src={whatsappIcon} alt="" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="footer-right-content">
                  <Row>
                    <Col lg="6">
                      <div className="footer-right-single-item">
                        <div className="footer-title">
                          <h4>Services</h4>
                        </div>
                        <ul>
                          <li>
                            <a href="#">Deployment</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Migration</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Monitoring</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Health checkup</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Performance analysis & tuning</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Backup & recovery</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Advanced security checkup</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="footer-right-single-item">
                        <div className="footer-title">
                          <h4>Links</h4>
                        </div>
                        <ul>
                          <li>
                            <a href="#">About us</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Services</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">PostgreSQL</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Client list</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Download</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                            <i className="bx bx-chevron-left"></i>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <hr style={{ color: "#fff" }} />
          <div className="footer-bottom-copyright">
            <p>Copyright © 2023 Forenizence Limited</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainFooter;
