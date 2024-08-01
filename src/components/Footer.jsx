import React from "react";

import { footerText } from "../data";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>123</div>
          <div>123</div>
        </h2>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">tab1</a>
            </div>
            <p className="desc">123</p>
          </div>
          <div className="right">
            <h3>tab2</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.dsec}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">
          &copy; 2024
          <br />이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
