import { useState } from "react";
import { useNavigate } from "react-router";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../../config/firebaseConfig";

import AuthCSS from "./Auth.module.css";

const Auth = () => {
  const [existingUser, setExistingUser] = useState(true);

  const navigate = useNavigate();

  // Track user input to register using state & event handler
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // fn for new user account
  const handleSignup = (e) => {
    e.preventDefault();
    // create user with email and pw
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log(res.user);
        // updateProfile used to manually add displayName, otherwise null
        updateProfile(auth.currentUser, { displayName: name });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password">Password:&nbsp;</label>
              <input
                id="password"
                required
                type="password"
                placeholder="******"
                // minLength={6}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit">OK</button>
          </fieldset>
          <p>
            No account? Signup{" "}
            <span onClick={() => setExistingUser(false)}>here!</span>
          </p>
        </form>
      ) : (
        <form className={AuthCSS.authForm} onSubmit={handleSignup}>
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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:&nbsp;</label>
              <input
                id="email"
                required
                type="email"
                placeholder="bigwillyg@hotmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password">Password:&nbsp;</label>
              <input
                id="password"
                required
                type="password"
                placeholder="******"
                // minLength={6}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit">OK</button>
          </fieldset>
          <p>
            Already signed up? Login{" "}
            <span onClick={() => setExistingUser(true)}>here!</span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Auth;