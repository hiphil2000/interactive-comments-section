import React from "react";
import { css, useTheme } from "@emotion/react";
import Button from "../common/button";
import { Delete, Edit, Reply } from "../icons";
import { IComponentBase } from "../interfaces";

interface ICommentButtonProps extends IComponentBase {
	onReply: () => void;
	onEdit: () => void;
	onDelete: () => void;
	isAuthor?: boolean;
}

export default function CommentButton({
	onReply,
	onEdit,
	onDelete,
	isAuthor,
}: ICommentButtonProps) {
	const theme = useTheme();
	const styles = {
		root: css`
          display: flex;
		  gap: ${theme.spacing * 2}px;
		  margin-left: auto;
		`,
	};

	return (
		<div css={styles.root}>
			{isAuthor ? (
				<>
					<Button icon={<Delete />} styles={css`color: ${theme.palette.error}`}
							onClick={onDelete}
					>
						Delete
					</Button>
					<Button icon={<Edit />} styles={css`color: ${theme.palette.primary}`}
							onClick={onEdit}
					>
						Edit
					</Button>
				</>
			) : (
				<Button icon={<Reply />} styles={css`color: ${theme.palette.primary}`}
						onClick={onReply}
				>
					Reply
				</Button>
			)}
		</div>
	)
}
