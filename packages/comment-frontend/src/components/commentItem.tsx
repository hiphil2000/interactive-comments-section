import React from "react";
import { css } from "@emotion/react";
import NumberSpinner from "./numberSpinner";
import styled from "@emotion/styled";
import Button from "./button";
import CommentCard from "./commentCard";
import Avatar from "./avatar";
import { Delete as DeleteIcon, Edit as EditIcon, Reply as ReplyIcon } from "./icons";

interface ICommentItemProps {

	commentId: string;
	authorName: string;
	isAuthor: boolean;
	avatarSrc: string | null;
	createAt: string;
	content: string;
	votes: number;
}

const CommentSection = styled("div")`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 0 0 16px;
  }

  & > *:nth-child(1) {
    margin-left: 0;
  }
`;

const ButtonGroup = styled("div")`
  display: flex;
  margin-left: auto;

  & > ${Button}:not(:first-child) {
    margin-left: 8px;
  }
`;

const styles = {
	title: css`
      color: #374049;
	`,
	content: css`
      color: #707378;
      font-size: 16px;
      font-weight: 300;
      margin: 0;
      word-break: break-all;
	`,
};

export default function CommentItem({
	commentId,
	isAuthor,
	authorName,
	avatarSrc,
	createAt,
	content,
	votes,
}: ICommentItemProps) {
	const handleIncrement = () => {
	};
	const handleDecrement = () => {
	};

	const desktopVote = () => (
		<NumberSpinner
			value={votes}
			onIncrement={handleIncrement}
			onDecrement={handleDecrement}
		/>
	);

	const commentContent = () => (
		<>
			<CommentSection>
				<Avatar src={avatarSrc || ""} alt={authorName} />
				<h4 css={styles.title}>{authorName}</h4>
				<span css={styles.content}>{createAt}</span>

				<ButtonGroup>
					<Button style={{ color: "red" }}>
						<ReplyIcon />&nbsp;Reply
					</Button>
				</ButtonGroup>
			</CommentSection>
			<p css={styles.content} style={{ marginTop: 0 }}>
				{content}
			</p>
			<CommentSection>
				<NumberSpinner value={votes} orient={"horizontal"}
							   onIncrement={() => {
							   }}
							   onDecrement={() => {
							   }}
				/>
				<ButtonGroup>
					<Button style={{ color: "red" }}>
						<DeleteIcon />&nbsp;Delete
					</Button>
					<Button style={{ color: "blue" }}>
						<EditIcon />&nbsp;Edit
					</Button>
				</ButtonGroup>
			</CommentSection>
		</>
	);

	return (
		<CommentCard actionContent={desktopVote()}
					 commentContent={commentContent()}
		/>
	);
}
