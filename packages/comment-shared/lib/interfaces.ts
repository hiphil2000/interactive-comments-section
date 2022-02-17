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
	createAt: string;
	updateAt?: string | null;
	deleteAt?: string | null;
	vote: number;
}

export interface ICommonResponse<T> {
	responseAt: string;
	data: T | null;
	message?: string | null;
}
