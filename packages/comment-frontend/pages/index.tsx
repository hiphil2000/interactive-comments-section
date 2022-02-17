import React from "react";
import useSWR from "swr";
import Container from "../src/components/container";
import { IComment } from "@hiphil2000/comment-shared";
import CommentItem from "../src/components/commentItem";

export default () => {
	const {data: comments} = useSWR("/api/comments/");
	console.log(comments);

	return (
		<Container maxWidth={"lg"}>
			{comments !== undefined && comments?.data.map((comment: IComment) => (
				<CommentItem
					key={comment.commentId}
					commentId={comment.commentId}
					isAuthor={false}
					authorName={comment.author.userName}
					avatarSrc={comment.author.avatar}
					content={comment.content}
					createAt={comment.createAt}
					votes={comment.vote}
				/>
			))}
		</Container>
	);
}
