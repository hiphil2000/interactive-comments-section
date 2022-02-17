import {Request, Response} from "express";
import { getComments } from "../services/commentService";
import { IComment, ICommonResponse } from "@hiphil2000/comment-shared";

export const commentsRouter = require("express-async-router").AsyncRouter();

/**
 * [GET] "/"
 * Get list of existing comments
 */
commentsRouter.get("/", async (req: Request, res: Response) => {
    const comments = await getComments();

    res.contentType("application/json");
    res.send({
        responseAt: new Date().toString(),
        data: comments
    } as ICommonResponse<IComment[]>);
});
