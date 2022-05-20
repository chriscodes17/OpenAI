import Response from "./Response";
import Loader from "./Loader";
export default function Responses({ responseData, isLoading }) {
  return (
    <div className="response-container">
      <h1>Responses</h1>
      {responseData.length === 0 && <h3 className="no-data-text">Looks like you have no saved data, enter a prompt above.</h3>}
      {isLoading ? (
        <Loader />
      ) : (
        responseData.map((obj) => (
          <Response
            key={obj.id}
            prompt={obj.prompt}
            response={obj.response}
            date={obj.date}
          />
        ))
      )}
    </div>
  );
}
