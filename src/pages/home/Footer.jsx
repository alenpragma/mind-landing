
import logo from "../../assets/icon/logo.svg";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";

const Footer = () => {
  return (
    <div className="bg-[#3A3935] pt-[48px] pb-[48px]">
      <Container className="my-">
        <div className="grid grid-cols-12 md:gap-5 gap-10">
            {/* logo */}
          <div className=" col-span-6 lg:col-span-2">
            <img src={logo} alt="" />
          </div>
          {/* footer section 2 */}
          <div className="col-span-6 lg:col-span-2 text-[#fff]">
            <h2 className="text-[16px] font-medium mb-3">Product</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-text-style">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          {/* footer section 3 */}
          <div className="col-span-6 lg:col-span-2 text-[#fff]">
            <h2 className="text-[16px] font-medium mb-3">Solutions</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-text-style">
                  Brainstorming
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Ideation
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Wireframing
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Research
                </Link>
              </li>
            </ul>
          </div>
          {/* footer section 4 */}
          <div className="col-span-6 lg:col-span-2 text-[#fff]">
            <h2 className="text-[16px] font-medium mb-3">Resources</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-text-style">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* footer section 5 */}
          <div className="col-span-6 lg:col-span-2 text-[#fff]">
            <h2 className="text-[16px] font-medium mb-3">Support</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-text-style">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          {/* footer section 6 */}
          <div className="col-span-6 lg:col-span-2 text-[#fff]">
            <h2 className="text-[16px] font-medium mb-3">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-text-style">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text-style">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="footer-text-style"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
