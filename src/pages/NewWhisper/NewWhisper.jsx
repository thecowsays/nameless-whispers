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

  return (
    <div className={NewWhisperCSS.container}>
      <div className={NewWhisperCSS.innerContainer}>
        <div>
          {/* <h1>{todaysDate}</h1> */}
          <div className={NewWhisperCSS.formContainer}>
            <form>
              <fieldset>
                <legend className="title">{todaysDate}</legend>
                <textarea
                  id="body"
                  className={NewWhisperCSS.textarea}
                  //   placeholder -- to be an array of prompts, coming soon(tm)
                  placeholder="Today I learned..."
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
