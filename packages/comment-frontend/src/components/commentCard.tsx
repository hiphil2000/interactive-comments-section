import React from "react";
import styled from "@emotion/styled";
import Paper from "./common/paper";

interface ICommentCardProps {
	actionContent?: React.ReactNode;
	commentContent?: React.ReactNode;
}

const Root = styled(Paper)`
  display: flex;
  gap: 16px;
`;

const ActionWrap = styled("div")`

`;

const ContentWrap = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
`;

export default function CommentCard({
	actionContent,
	commentContent,
}: ICommentCardProps) {
	return (
		<Root>
			<ActionWrap>
				{actionContent}
			</ActionWrap>
			<ContentWrap>
				{commentContent}
			</ContentWrap>
		</Root>
	);
}
