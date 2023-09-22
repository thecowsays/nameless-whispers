// import NewWhisper from "../../components/NewWhisper/NewWhisper";
import MainMenu from "../../components/MainMenu/MainMenu";

import HomepageCSS from "./Homepage.module.css";

const Homepage = () => {
  // const centerWithMargin = `HomepageCSS.center HomepageCSS.addTopMargin`;
  return (
    <div className={HomepageCSS.container}>
      <div className={HomepageCSS.innerContainer}>
        <div>
          <h1>Nameless Whispers</h1>
          {<MainMenu />}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
