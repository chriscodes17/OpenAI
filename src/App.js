import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Responses from "./components/Responses";

function App() {
  const [responseData, setResponseData] = useState(
    () => JSON.parse(localStorage.getItem("responseData")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const handleFetch = (prompt) => {
    const data = {
      prompt: `${prompt}`,
      temperature: 0.8,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/n"],
    };
    setIsLoading(true);
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        const date = new Date();
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        };
        const response = data.choices[0].text;
        const responseObject = {
          id: data.id,
          prompt: prompt,
          response: response,
          date: date.toLocaleString("en-US", options),
        };
        setResponseData((prevResponseData) => {
          return [responseObject, ...prevResponseData];
        });
        setIsLoading(false);
      });
  };
  useEffect(() => {
    localStorage.setItem("responseData", JSON.stringify(responseData));
  }, [responseData]);
  return (
    <div className="app-container">
      <h1>I am OpenAI, ask me anything!</h1>
      <Form isLoading={isLoading} fetch={handleFetch} />
      <Responses isLoading={isLoading} responseData={responseData} />
    </div>
  );
}

export default App;
