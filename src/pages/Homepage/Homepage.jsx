import HomepageCSS from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={HomepageCSS.container}>
      <div className={HomepageCSS.contentWrapper}>
        <p>
          Content
          <br />
          Area Here
        </p>
      </div>
    </div>
  );
};

export default Homepage;
