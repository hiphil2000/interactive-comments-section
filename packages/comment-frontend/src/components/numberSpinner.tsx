import React from "react";
import styled from "@emotion/styled";
import Button from "./button";
import { Minus as MinusIcon, Plus as PlusIcon } from "./icons";

interface INumberSpinnerProps {
	value: number;
	onIncrement: () => void;
	onDecrement: () => void;
	orient?: "vertical" | "horizontal";
}

const ButtonRoot = styled("div")`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background-color: #f5f6fa;
  overflow: hidden;
`;

const VoteButtonItem = styled(Button)`
  width: 36px;
  height: 36px;
  border-radius: 0;
  padding: 0;
`;

const VoteCount = styled("span")`
  color: #6160a4;
  font-weight: bold;
  margin: 0 8px;
`;

export default function NumberSpinner({
	value,
	onIncrement,
	onDecrement,
	orient = "vertical",
}: INumberSpinnerProps) {
	const buttonOrient = orient === "vertical" ? "column" : "row";

	return (
		<ButtonRoot style={{ flexDirection: buttonOrient }}>
			<VoteButtonItem onClick={onIncrement}>
				<PlusIcon />
			</VoteButtonItem>
			<VoteCount>{value}</VoteCount>
			<VoteButtonItem onClick={onDecrement}>
				<MinusIcon />
			</VoteButtonItem>
		</ButtonRoot>
	);
}
