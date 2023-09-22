import { useState } from "react";

import AuthCSS from "./Auth.module.css";

const Auth = () => {
  const [existingUser, setExistingUser] = useState(true);

  return (
    <div>
      {existingUser ? (
        <form className={AuthCSS.authForm}>
          <p>
            E-mail:&nbsp;
            <input type="email" placeholder="billg@hotmail.com" />
          </p>
          <p>
            Password:&nbsp;
            <input type="password" placeholder="******" />
          </p>
        </form>
      ) : (
        <form>Signup</form>
      )}
    </div>
  );
};

export default Auth;
