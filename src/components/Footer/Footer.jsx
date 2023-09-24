import {
  SiReact,
  SiFirebase,
  SiJavascript,
  SiVisualstudiocode,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { RiHeartsFill } from "react-icons/ri";

import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterCSS.container}>
      <p>
        <SiReact style={{ color: "#61DAFB" }} />
        <SiFirebase style={{ color: "#FFCA28" }} />
        <SiJavascript style={{ color: "#F7DF1E" }} />
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </p>
      <div>
        <p
          className={FooterCSS.signature}
          alt="&copy;2023 B.W. All rights reserved."
        >
          Made with
          <RiHeartsFill
            style={{ color: "#F00", opacity: "100%", fontSize: "120%" }}
          />
          by Brandon W.
        </p>
        <p className={FooterCSS.social}>
          <SiGithub style={{ color: "#181717" }} />
          {/* <SiGithub /> */}
          <SiLinkedin style={{ color: "#0A66C2" }} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
