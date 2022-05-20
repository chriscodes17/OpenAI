export default function Response({
  prompt,
  response,
  date,
  id,
  deleteResponse,
}) {
  return (
    <div className="response">
      <div className="response-header">
        <p className="prompt-date">{date}</p>
        <button
          onClick={() => deleteResponse(id)}
          className="response-delete-btn"
        >
          X
        </button>
      </div>
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
