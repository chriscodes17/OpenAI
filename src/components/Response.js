export default function Response({ prompt, response, date }) {
  return (
    <div className="response">
      <p className="prompt-date">{date}</p>
      <div className="response-text">
        <div>
          <p className="bold">Prompt:</p>
          <p className="bold">Response:</p>
        </div>
        <div>
          <p>{prompt}</p>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}
