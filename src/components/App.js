import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  const [data, setdata] = useState(props.slides[2]);
  console.log(props.slides[3]);
  console.log(props.slides);
  return (
    <>
      <h1 data-testid="title">{data.title}</h1>
      <p data-testid="text">{data.text}</p>
      {index === 0 ? null : (
        <button
          data-testid="button-prev"
          onClick={() => {
            setIndex(index - 1);
            setdata(props.slides[index]);
          }}
        >
          prev
        </button>
      )}
      {index === 4 ? null : (
        <button
          data-testid="button-next"
          onClick={() => {
            setIndex(index + 1);
            setdata(props.slides[index]);
          }}
        >
          next
        </button>
      )}
      <button
        data-testid="button-restart"
        onClick={() => {
          setIndex(0);
          setdata(props.slides[index]);
        }}
      >
        restart
      </button>
    </>
  );
};

export default App;
