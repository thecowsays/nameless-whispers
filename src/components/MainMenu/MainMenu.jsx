import { Link } from "react-router-dom";

import MainMenuCSS from "./MainMenu.module.css";

const MainMenu = () => {
  return (
    <div className={MainMenuCSS.mainWrapper}>
      <p className="title">Main Menu</p>
      <ol>
        {/* Future Feature: Have item 1 change to 'Logout' using Auth */}
        <li>
          <Link to="/auth">Signup / Login</Link>
        </li>
        <li>
          <Link to="/newwhisper">Whisper a Thought</Link>
        </li>
        <li>
          <Link to="/view">View Recent Entries</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="https://poopoopaper.com/pages/poop-to-paper-process">
            Exit
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default MainMenu;
