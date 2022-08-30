import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { CardS } from "./Card";

const ButtonS = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 2.5rem;
  border-radius: 30px;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }
`;

const Button = (props) => {
  console.log(props);

  const onClickHandler = (event) => {
    console.log(event.target);
  };

  return (
    <CardS>
      <ButtonS
        className={props.className}
        type={props.type || "button"}
        onClick={onClickHandler}
      >
        {props.children}
      </ButtonS>
    </CardS>
  );
};

// ----------------------------------
// Add when using React components in HTML 👇

// --------
// -- When we have just ONE of the same element in HTML

// const container = document.getElementById("button");
// if (!container) return;
// const root = ReactDOM.createRoot(container);
// root.render(<Button {...container.dataset} />);
// ----------------------------------

// --------
// -- When we have MORE than one of the same element in HTML
const containers = document.querySelectorAll("#react__button");

if (!containers) return;
const roots = [...containers].map((container) =>
  ReactDOM.createRoot(container)
);

roots.forEach((root, index) =>
  root.render(<Button {...containers[index].dataset} />)
);

// ----------------------------------

// 🟢 Example
{
  /* <div
      id="react__button"
      data-feed="custom_feed.json"
      data-children="This is a React component"
      class="text-3xl font-bold underline mb-4"
    ></div> */
}
