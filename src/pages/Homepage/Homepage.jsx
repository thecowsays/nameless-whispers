import NewWhisper from "../../components/NewWhisper/NewWhisper";

import HomepageCSS from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={HomepageCSS.container}>
      <div className={HomepageCSS.contentWrapper}>
        {/* <h1 className={HomepageCSS.h1}></h1> */}
        {
          <NewWhisper />
        }
      </div>
    </div>
  );
};

export default Homepage;
