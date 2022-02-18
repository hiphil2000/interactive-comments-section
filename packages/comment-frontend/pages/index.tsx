import React from "react";
import useSWR from "swr";
import { IComment } from "@hiphil2000/comment-shared";
import CommentItem from "../src/components/comment/commentItem";
import MainLayout from "../src/components/layouts/MainLayout";

export default () => {
	const {data: comments} = useSWR("/api/comments/");
	console.log(comments);

	const temporaryHandler = () => {}

	return (
		<MainLayout>
			{comments !== undefined && comments?.data.map((comment: IComment) => (
				<CommentItem
					onDecrement={temporaryHandler}
					onIncrement={temporaryHandler}
					onDelete={temporaryHandler}
					onEdit={temporaryHandler}
					onReply={temporaryHandler}
					key={comment.commentId}
					comment={comment}
				/>
			))}
		</MainLayout>
	);
}
