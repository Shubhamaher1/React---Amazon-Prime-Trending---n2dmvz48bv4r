import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  const [data, setdata] = useState(props.slides[2]);

  return (
    <>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      {index === 0 ? (
        <button
          data-testid="button-prev"
          disabled={true}
          // style={{ display: "none", }}
          onClick={() => {
            setIndex(index - 1);
            // setdata(props.slides[index]);
          }}
        >
          Prev
        </button>
      ) : (
        <button
          data-testid="button-prev"
          onClick={() => {
            setIndex(index - 1);
            // setdata(props.slides[index]);
          }}
        >
          Prev
        </button>
      )}
      {index === 4 ? (
        <button
          disabled={true}
          data-testid="button-next"
          // style={{ display: "none" }}
          onClick={() => {
            setIndex(index + 1);
            // setdata(props.slides[index]);
          }}
        >
          Next
        </button>
      ) : (
        <button
          data-testid="button-next"
          onClick={() => {
            setIndex(index + 1);
            // setdata(props.slides[index]);
          }}
        >
          Next
        </button>
      )}
      {index === 0 ? (
        <button
          data-testid="button-restart"
          //  style={{ display: "none" }}
          disabled={true}
        >
          Restart
        </button>
      ) : (
        <button
          data-testid="button-restart"
          onClick={() => {
            setIndex(0);
            // setdata(props.slides[index]);
          }}
        >
          Restart
        </button>
      )}
    </>
  );
};

export default App;
