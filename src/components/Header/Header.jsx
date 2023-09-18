import { Link, useNavigate } from "react-router-dom";

import { SlHome } from "react-icons/sl";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  const navbar = ["File", "Edit", "View", "Login"];
  const navigate = useNavigate("");

  return (
    <div className={HeaderCSS.container}>
      {/* <div className="menu-wrapper"> */}
      <SlHome onClick={() => navigate("/")} />
      {/* {navbar.map((item) => {
        <Link to={`/${item}`} className={HeaderCSS.menuLink}>
          {item}
        </Link>;
      })} */}

      {navbar.map((item) => (
        <Link className={HeaderCSS.menuLink} to={`/${item}`} key={item}>
          {item}
        </Link>
      ))}

      {/* </div> */}
      {/* <div>Title Goes Here</div> */}
    </div>
  );
};

export default Header;
