import MainMenuCSS from "./MainMenu.module.css";

const MainMenu = () => {
  return (
    <div className={MainMenuCSS.mainWrapper}>
      <p className={MainMenuCSS.title}>Main Menu</p>
      <ol>
        {/* Future Feature: Have item 1 change to 'Logout' using Auth */}
        <li>Signup / Login</li>
        <li>Whisper a Thought</li>
        {/* <li>Listen to Others</li> */}
        <li>Help</li>
        <li>Quit</li>
      </ol>
    </div>
  );
};

export default MainMenu;
