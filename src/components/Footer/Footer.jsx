import { SlHeart } from "react-icons/sl";
import {
  SiReact,
  SiFirebase,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";

import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterCSS.container}>
      <p className={FooterCSS.icon}>
        <SiReact style={{ color: "#61DAFB" }} />
        <SiFirebase style={{ color: "#FFCA28" }} />
        {/* <SiGithub style={{ color: "#181717" }} /> */}
        <SiGithub />
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </p>
      <p alt="&copy;2023 B.W. All rights reserved.">
        Made with <SlHeart style={{ color: "#F00", opacity: "100%" }} />
        by Brandon W.
      </p>
    </div>
  );
};

export default Footer;
