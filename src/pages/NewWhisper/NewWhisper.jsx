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

  // Get the current date and submit with form data
  const entryDate = new Date().getTime() / 1000;
  // Displays YYYY-MM-DD without time, for history page (future feature)
  // const DateWithoutTime = new Date().toISOString().split("T")[0];

  // Save user inputs to state
  const [userInput, setUserInput] = useState({
    content: "",
    entryDate: "",
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
                  //   future feature: show random prompt from array/firestore
                  placeholder="Today I learned..."
                  maxLength="250" // 250 chars is ~50 words
                  onChange={(e) =>
                    setUserInput({ ...userInput, content: e.target.value })
                  }
                />
                {/* hidden field saves entry date on user submission */}
                <input type="hidden" id={entryDate} />
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
