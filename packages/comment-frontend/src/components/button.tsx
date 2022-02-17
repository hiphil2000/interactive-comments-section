import React from "react";
import styled from "@emotion/styled";

const Button = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 125ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px 16px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(69, 67, 150, 0.08);
  }
  &:active {
    background-color: rgba(69, 67, 150, 0.12);
  }
`;

export default Button;
