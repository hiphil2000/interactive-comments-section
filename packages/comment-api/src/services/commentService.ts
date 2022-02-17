import { IComment } from "@hiphil2000/comment-shared";
import { tempUsers } from "./userService";
import { sleep } from "../libs/util";

const tempComments: IComment[] = [
	{
		commentId: "com1",
		author: tempUsers[0],
		content: "comasdfasdf",
		createAt: "2022-01-17 13:03:00",
		vote: 3,
	},
	{
		commentId: "com2",
		author: tempUsers[1],
		content: "comasdfasdf21313123",
		createAt: "2022-02-17 13:03:00",
		vote: 3,
	},
	{
		parentId: "com2",
		commentId: "com2-1",
		author: tempUsers[2],
		content: "comasdfasdf22222",
		createAt: "2022-02-17 15:03:00",
		vote: 3,
	},
	{
		commentId: "com3",
		author: tempUsers[3],
		content: "comasdfasdfaasdf",
		createAt: "2021-02-17 13:03:00",
		vote: 3,
	},
];

/**
 * Gets available comments
 * @returns {Promise<IComment[]>} list of comments
 * @constructor
 */
export async function getComments(): Promise<IComment[]> {
	await sleep(500);
	return tempComments.sort((a, b) => {
		const aDate = new Date(a.createAt);
		const bDate = new Date(b.createAt);

		if (aDate < bDate) {
			return -1;
		} else if (aDate === bDate) {
			return 0
		} else {
			return 1;
		}
	});
}
