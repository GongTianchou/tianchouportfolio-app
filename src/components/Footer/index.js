// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import React from 'react';
// import AlternateEmailIcon from '../../assets/AlternateEmailIcon.png'
import GitHubIcon from "../../assets/GitHubIcon.png";
import LinkedInIcon from '../../assets/LinkedInIcon.png';

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light"></nav>
        <div class="footerContent">
          <a
            href="https://github.com/GongTianchou"
            target="_blank"
            rel="noreferrer"
          >
            {/* <GitHubIcon
              alt="github"
              sx={{ width: 40, height: 40, color: "white" }}
            /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/tianchou-joe-gong-1a1917a7/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <LinkedInIcon
              alt="linkedin"
              sx={{ width: 40, height: 40, color: "white" }}
            /> */}
          </a>
          <a href="mailto:tianchougong17@gmail.com">
            {/* <AlternateEmailIcon
              alt="gmail"
              sx={{ width: 40, height: 40, color: "white" }}
            /> */}
          </a>
        </div>
        <p>© 2022 Tianchou Gong - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
