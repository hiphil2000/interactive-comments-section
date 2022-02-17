export interface IComment {
	commentId: string;
	authorId: string;
	content: string;
	createAt: Date;
	updateAt?: Date | null;
	deleteAt?: Date | null;
	vote: number;
}
