import React from "react";
import styled from "@emotion/styled";
import Avatar from "../common/avatar";
import Typography from "../common/typography";
import { css, useTheme } from "@emotion/react";
import Down from "../common/media/down";
import CommentButton from "./commentButton";

interface ICommentHeaderProps {
	avatar: string;
	name: string;
	createAt: string;
	onReply: () => void;
	onEdit: () => void;
	onDelete: () => void;
	isAuthor?: boolean;
}

const RootBox = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  align-items: center;
`;

export default function CommentHeader({
	avatar,
	name,
	createAt,
	isAuthor,
	onReply,
	onEdit,
	onDelete,
}: ICommentHeaderProps) {
	const theme = useTheme();
	const styles = {
		replyButton: css`
          color: ${theme.palette.primary};
		`,
		createAt: css`
          color: ${theme.palette.disabledText};
		`,
		buttonWrap: css`
          margin-left: auto;
		`,
	};

	return (
		<RootBox>
			<Avatar src={avatar} alt={name} />
			<Typography variant={"h4"}>{name}</Typography>
			<Typography variant={"h4"} styles={styles.createAt}>{createAt}</Typography>
			<Down breakpoint="sm" styles={styles.buttonWrap} mediaStyle={css`display: none;`}>
				<CommentButton onReply={onReply} onEdit={onEdit} onDelete={onDelete} isAuthor={isAuthor} />
			</Down>
		</RootBox>
	);
}
