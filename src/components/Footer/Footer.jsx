import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterCSS.container}>
      <p>Made with love by</p>
      <p>&copy;2023 Footer. All rights reserved.</p>
    </div>
  );
};

export default Footer;
