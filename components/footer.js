import React from 'react';

const Footer = () => (
  <footer>
    <p>sponsors: Dot Vegas PunchCode</p>
    <style jsx>{`
      footer {
        display: flex;
        justify-content: space-around;
        background-color: lightgrey;
        position: absolute;
        bottom: 0;
        width: 100vw;
      }
      p {
        margin: 10px auto;
      }
    `}</style>
  </footer>
);

export default Footer;
