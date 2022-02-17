export interface IUser {
	userId: string;
	userName: string;
	avatar: string | null;
}

export interface IComment {
	parentId?: string | null;
	commentId: string;
	author: IUser;
	content: string;
	createAt: Date;
	updateAt?: Date | null;
	deleteAt?: Date | null;
	vote: number;
}

export interface ICommonResponse<T> {
	responseAt: Date;
	data: T | null;
	message?: string | null;
}
