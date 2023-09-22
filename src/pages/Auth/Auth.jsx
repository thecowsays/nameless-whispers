import { useState } from "react";

import AuthCSS from "./Auth.module.css";

const Auth = () => {
  const [existingUser, setExistingUser] = useState(false);

  return (
    <div className={AuthCSS.container}>
      {existingUser ? (
        <form className={AuthCSS.authForm}>
          <fieldset>
            <legend className="title">LOGIN</legend>
            <div>
              <label htmlFor="email">E-mail:&nbsp;</label>
              <input
                id="email"
                required
                type="email"
                placeholder="bigwillyg@hotmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password:&nbsp;</label>
              <input
                id="password"
                required
                type="password"
                placeholder="******"
              />
            </div>
            <button type="submit">OK</button>
          </fieldset>
          <p>No account? Signup here!</p>
        </form>
      ) : (
        <form className={AuthCSS.authForm}>
          <fieldset>
            <legend className="title">Register</legend>
            <div>
              <label htmlFor="name">Name:&nbsp;</label>
              <input
                id="name"
                required
                type="text"
                placeholder="Bill"
                autoCapitalize="on"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:&nbsp;</label>
              <input
                id="email"
                required
                type="email"
                placeholder="bigwillyg@hotmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password:&nbsp;</label>
              <input
                id="password"
                required
                type="password"
                placeholder="******"
              />
            </div>
            <button type="submit">OK</button>
          </fieldset>
          <p>No account? Signup here!</p>
        </form>
      )}
    </div>
  );
};

export default Auth;