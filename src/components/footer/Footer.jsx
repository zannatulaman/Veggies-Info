import {  faFacebook, faGoogle, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouseChimney, faMobileButton,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="flex flex-wrap">
          <div className="flex-items">
            <h5>About Us</h5>
            <div className="details">
              <img
                src="images/all-products/basket-of-fruit.png"
                alt="fruit-basket"
              />
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                dolor? <span>[...]</span>
              </p>
            </div>
          </div>
          <div className="flex-items">
            <h5>Information</h5>
            <div className="details">
              <ul className="order-list">
                <li>
                  <span>New Products</span>
                </li>
                <li>
                  <span>Top Sellers</span>
                </li>
                <li>
                  <span>Our Blog</span>
                </li>
                <li>
                  <span>About Our Shop</span>
                </li>
                <li>
                  <span>About Us</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-items">
            <h5>Instagram</h5>
          </div>
          <div className="flex-items ">
            <h5>Contact Us</h5>
          <div className="details">
          <p className="font-icon">
              <FontAwesomeIcon icon={faHouseChimney} />
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
                nostrum?
              </span>
            </p>
            <p className="font-icon">
              <FontAwesomeIcon icon={faMobileButton} />
              <span>
               +000000000
              </span>
            </p>
            <p className="font-icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>
                example@gmail.com
              </span>
            </p>
          </div>
          </div>
        </div>

        <div>
          <hr className="hr-line" />
        </div>

        <div className="flex align-center justify-between flex-wrap">
            <div className="follow-icon">
              <p>Follow Us
                <span className="facebook"><FontAwesomeIcon icon={faFacebook}/></span>
                <span className="twitter"><FontAwesomeIcon icon={faTwitter}/></span>
                <span className="instagram"><FontAwesomeIcon icon={faInstagram}/></span>
                <span className="google"><FontAwesomeIcon icon={faGoogle}/></span>
                <span className="instagram"><FontAwesomeIcon icon={faPinterest}/></span>
              </p>
            </div>

            <div className="payment-icon">
            <p>Payment Method
            <SiVisa size="2em" color="#1A1F71" />
            <SiMastercard size="2em" color="#EB001B" />
            <SiPaypal size="2em" color="#003087" />
              </p>
            </div>
         </div>


      </div>
    </div>
  );
};

export default Footer;
