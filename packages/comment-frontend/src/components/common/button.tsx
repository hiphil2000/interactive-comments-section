import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IComponentBase } from "../interfaces";

const ButtonTag = styled("button")`
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
  user-select: none;

  &:hover {
    background-color: rgba(69, 67, 150, 0.08);
  }
  &:active {
    background-color: rgba(69, 67, 150, 0.12);
  }
`;

interface IButtonProps extends ButtonHTMLAttributes<any>, IComponentBase {
	icon?: React.ReactNode;
}

export default function Button({
	icon,
	styles,
	...props
}: IButtonProps) {
	return (
		<ButtonTag css={styles}>
			{icon &&
				<div css={css`margin-right: 0.25em;`}>{icon}</div>
			}
			{props.children}
		</ButtonTag>
	)
};
