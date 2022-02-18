import React from "react";
import { css, useTheme } from "@emotion/react";
import NumberSpinner from "../common/numberSpinner";
import Typography from "../common/typography";
import { IComment } from "@hiphil2000/comment-shared";
import CommentFooter from "./commentFooter";
import CommentHeader from "./commentHeader";
import Paper from "../common/paper/paper";
import Down from "../common/media/down";
import { dateToString } from "../../libs/data";
import Up from "../common/media/up";

interface ICommentItemProps {
	comment: IComment;
	onIncrement: () => void;
	onDecrement: () => void;
	onReply: () => void;
	onEdit: () => void;
	onDelete: () => void;
	isAuthor?: boolean;
}

function CommentItem({
	comment,
	onIncrement,
	onDecrement,
	onReply,
	onEdit,
	onDelete,
	isAuthor,
}: ICommentItemProps) {
	const theme = useTheme();

	const { createAt, content, vote } = comment;
	const { avatar, userName } = comment.author;

	return (
		<Paper css={css`
          display: flex;
          gap: 16px;
          margin-bottom: ${theme.spacing * 4}px;

          &:nth-last-of-type {
            margin-bottom: 0;
          }
		`}>
			<Down breakpoint="sm" mediaStyle={css`display: none;`}>
				<NumberSpinner
					value={vote}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
				/>
			</Down>
			<div css={css`display: flex;
              flex-direction: column;
              flex: 1;
              gap: 16px;`}>
				<CommentHeader avatar={avatar || ""}
							   name={userName}
							   createAt={dateToString(createAt)}
							   onReply={onReply} onEdit={onEdit} onDelete={onDelete} isAuthor={isAuthor}
				/>
				<div>
					<Typography variant={"body1"} styles={css`color: ${theme.palette.disabledText}; font-weight: 400;`}>
						{content}
					</Typography>
				</div>
				<Up breakpoint="sm" mediaStyle={css`display: none;`}>
					<CommentFooter votes={vote}
								   onIncrement={onIncrement} onDecrement={onDecrement}
								   onReply={onReply} onEdit={onEdit} onDelete={onDelete} isAuthor={isAuthor}
					/>
				</Up>
			</div>
		</Paper>
		// <CommentCard actionContent={desktopVote()}
		// 			 commentContent={commentContent()}
		// 			 styles={css`margin-bottom: 100px;`}
		// />
	);
}

export default React.memo(CommentItem);
