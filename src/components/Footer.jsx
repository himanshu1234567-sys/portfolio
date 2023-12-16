/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Himanshu.</span>
        <div className="links">
          <a href="https://www.instagram.com/himanshu.mehar?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/himanshu-mehar-babb491b4/">
            <i className="fab fa-linkedin"></i>
          </a>
        
        </div>
        <p className="copyright">
          <i className="fas fa-phone"></i>
          <a href="tel:+91 8827729902">91 8827729902</a>
        </p>

      </div>
    </footer>
  );
}

export default Footer;
