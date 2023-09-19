import NewWhisper from "../../components/NewWhisper/NewWhisper";

import HomepageCSS from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={HomepageCSS.container}>
      <div className={HomepageCSS.contentWrapper}>{<NewWhisper />}</div>
    </div>
  );
};

export default Homepage;
