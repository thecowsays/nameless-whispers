import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebaseConfig";

import { SlHome } from "react-icons/sl";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  const navbar = ["File", "Edit", "View"];
  const navigate = useNavigate();

  // get user data
  const [user] = useAuthState(auth);

  return (
    <div className={HeaderCSS.container}>
      <div className={HeaderCSS.navbarWrapper}>
        <SlHome
          onClick={() => navigate("/")}
          className={(HeaderCSS.menuLink, HeaderCSS.icon)}
        />

        {navbar.map((item) => (
          <Link className={HeaderCSS.menuLink} to={`/${item}`} key={item}>
            {item}
          </Link>
        ))}
        {user ? (
          <Link to={"/"} className={HeaderCSS.menuLink}>
            Logout
          </Link>
        ) : (
          <Link className={HeaderCSS.menuLink} to={"/auth"}>
            Login
          </Link>
        )}
      </div>
      <div className={HeaderCSS.userGreeting}></div>
      {user && <div>{`Hello, ${user?.displayName}!`}</div>}
    </div>
  );
}
export default Header;
