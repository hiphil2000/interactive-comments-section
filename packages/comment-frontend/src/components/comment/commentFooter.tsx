import React from "react";
import { css } from "@emotion/react";
import NumberSpinner from "../common/numberSpinner";
import { IComponentBase } from "../interfaces";
import CommentButton from "./commentButton";

interface ICommentFooterProps extends IComponentBase {
	votes: number;
	onIncrement: () => void;
	onDecrement: () => void;
	onReply: () => void;
	onEdit: () => void;
	onDelete: () => void;
	isAuthor?: boolean;
}

export default function CommentFooter({
	styles: externalStyles,
	votes,
	onIncrement,
	onDecrement,
	onReply,
	onEdit,
	onDelete,
	isAuthor,
}: ICommentFooterProps) {
	const styles = {
		root: css`
          display: flex;
          ${externalStyles}
		`,
	};

	return (
		<div css={styles.root}>
			<NumberSpinner value={votes}
						   onIncrement={onIncrement}
						   onDecrement={onDecrement}
						   orient="horizontal"
			/>
			<CommentButton onReply={onReply} onEdit={onEdit} onDelete={onDelete} isAuthor={isAuthor} />
		</div>
	);
}
