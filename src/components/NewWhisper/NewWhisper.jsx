import NewWhisperCSS from "./NewWhisper.module.css";

const NewWhisper = () => {
  // get date, format and display it (local to user)
  const date = new Date();
  // spell out the month
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  const todaysDate = `${month} ${day}, ${year}`;

  return (
    <div>
      <h1 className={NewWhisperCSS.h1}>{todaysDate}</h1>
      <form>
        <textarea
          id="body"
          className={NewWhisperCSS.textarea}
          //   placeholder -- to be an array of prompts, coming soon
          placeholder="Today I learned..."
        />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default NewWhisper;
