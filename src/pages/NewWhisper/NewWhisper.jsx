import { useState } from "react";

import NewWhisperCSS from "./NewWhisper.module.css";

const NewWhisper = () => {
  // -- display current local date for the user --
  // get date, format and display it (local to user)
  const date = new Date();
  // spell out the month
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  // final date format as displayed for user
  const todaysDate = `${month} ${day}, ${year}`;

  // Save user inputs to state
  const [userInput, setUserInput] = useState({
    content: "",
  });

  return (
    <div className={NewWhisperCSS.container}>
      <div className={NewWhisperCSS.innerContainer}>
        <div>
          {/* <h1>{todaysDate}</h1> */}
          <div className={NewWhisperCSS.formContainer}>
            <form>
              <fieldset>
                <legend className="title">{todaysDate}</legend>
                <label htmlFor="content"></label>
                <textarea
                  id="content"
                  className={NewWhisperCSS.textarea}
                  //   placeholder -- to be an array of prompts, coming soon(tm)
                  placeholder="Today I learned..."
                  maxLength="250" // 250 chars is ~50 words
                  onChange={(e) =>
                    setUserInput({ ...userInput, content: e.target.value })
                  }
                />
              </fieldset>
            </form>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWhisper;
