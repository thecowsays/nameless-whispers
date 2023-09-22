// import NewWhisper from "../../components/NewWhisper/NewWhisper";

import HomepageCSS from "./Homepage.module.css";

const Homepage = () => {
  // const centerWithMargin = `HomepageCSS.center HomepageCSS.addTopMargin`;
  return (
    <div className={HomepageCSS.container}>
      <div className={HomepageCSS.contentWrapper}>
        <div>
          <h1>Nameless Whispers</h1>
          <div className={HomepageCSS.mainWrapper}>
            <p className={HomepageCSS.title}>Main Menu</p>
            <ol>
              {/* Future Feature: Have item 1 change to 'Logout' using Auth */}
              <li>Signup / Login</li>
              <li>Whisper a Thought</li>
              {/* <li>Listen to Others</li> */}
              <li>Help</li>
              <li>Quit</li>
            </ol>
          </div>
          {/* <p></p> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
