import { IUser } from "@hiphil2000/comment-shared";
import { sleep } from "../libs/util";

export const tempUsers: IUser[] = [
	{
		userId: "ecb46260-9d37-402c-ab6a-0212cf080560",
		userName: "amyrobson",
		avatar: "/images/avatars/image-amyrobson.webp",
	},
	{
		userId: "81cabe47-9224-4eb9-9d2e-61fccc5f8c1f",
		userName: "juliusomo",
		avatar: "/images/avatars/image-juliusomo.webp",
	},
	{
		userId: "68bc22f7-09df-42cb-bdb3-c58e2c05434d",
		userName: "maxbalgun",
		avatar: "/images/avatars/image-maxbalgun.webp",
	},
	{
		userId: "c0b33ad6-d0a9-4d9d-a046-c2408547ef72",
		userName: "ramsesmiron",
		avatar: "/images/avatars/image-ramsesmiron.webp",
	},
]

export async function getUsers(): Promise<IUser[]> {
	await sleep(500);
	return tempUsers;
}
