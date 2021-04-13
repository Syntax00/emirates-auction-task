import React from "react";

import styles from "./SocialNetworkIcon.module.scss";

const SocialNetworkIcon = ({ iconName, url }) => (
  <a
    href={url}
    className={styles["social-network-icon-wrapper"]}
    target="_blank"
    rel="noreferrer"
  >
    <i className={`fa fa-${iconName}`} />
  </a>
);

export default SocialNetworkIcon;
