import { useState } from "react";
export default function Form({ fetch, isLoading }) {
  const [formPrompt, setFormPrompt] = useState("");
  const onChangeHandler = (event) => {
    setFormPrompt(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formPrompt) return;
    fetch(formPrompt);
    setFormPrompt("");
  };
  return (
    <div>
      <form className="prompt-form" onSubmit={handleSubmit}>
        <textarea
          name="prompt"
          value={formPrompt}
          cols="40"
          rows="10"
          onChange={onChangeHandler}
          placeholder='Write me a poem about the rain...'
        ></textarea>
        <button className="form-btn" disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
}
