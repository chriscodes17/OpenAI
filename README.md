# OpenAI App for Shopify Internship Fall 2022

**Live Demo Link**: https://magenta-kashata-dca0c1.netlify.app/

**About**\
This web application uses OpenAI's GPT-3 AI model where a user can input a question or prompt and the AI will output a response. The responses are in a list with the time stamp of creation, original prompt, AI response and a delete button so the user can remove unwanted responses.

**Technology Used**\
This web application was written in Javascript using the fontend framework `React.js`. I chose to use React as a framework because I recently finished learning the basics of React and React provides a fast, scalable, and simple work flow, it also provides an easy way to structure components and pass down data to components

**API call**\
The API call is handled through a function called `handleFetch` where it takes the prompt as a parameter and only triggers when the user clicks submit. The response data from the API is then organized as seen below. 
```
const responseObject = {
  id: data.id,
  prompt: prompt,
  response: response,
  date: date.toLocaleString("en-US", options),
};
```
**Project File Structure**\
```
├── public                # Public files (HTML)
├── src                   # source files (contains index.js, app.js, styling and components)
├── package-lock.json
├── package.json
└── README.md
```
