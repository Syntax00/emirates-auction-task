import React from "react";

import logo from "../../assets/images/logo.png";
import SocialNetworkIcon from "../UIElements/SocialNetworkIcon/SocialNetworkIcon";
import WidthLimiter from "../UIElements/WidthLimiter/WidthLimiter";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer>
    <WidthLimiter>
      <WidthLimiter>
        <div className={styles["footer-container"]}>
          <div className={styles["brand-wrapper"]}>
            <img src={logo} alt="Emirates Auction Brand" />

            <p>
              Buy new and used cars in UAE, shipping and delivery service are
              available, Sell your car at the highest price online with no
              worries visiting cars show rooms.
            </p>
          </div>

          <div className={styles["social-networks-wrapper"]}>
            <p>
              Follow the first and the largest online auction in UAE and Middle
              East
            </p>

            <div className={styles["social-networks"]}>
              <SocialNetworkIcon
                iconName="facebook"
                url="https://www.facebook.com"
              />
              <SocialNetworkIcon
                iconName="twitter"
                url="https://www.twitter.com"
              />
              <SocialNetworkIcon
                iconName="youtube-play"
                url="https://www.youtube.com"
              />
              <SocialNetworkIcon
                iconName="instagram"
                url="https://www.instagram.com"
              />
              <SocialNetworkIcon
                iconName="google-plus"
                url="https://www.google.com"
              />
            </div>
          </div>
        </div>
      </WidthLimiter>
    </WidthLimiter>
  </footer>
);

export default Footer;
