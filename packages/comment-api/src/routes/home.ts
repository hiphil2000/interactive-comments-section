import {Request, Response} from "express";

export const homeRouter = require("express").Router();

/**
 * [GET] "/"
 * temp route for index
 */
homeRouter.get("/", (req: Request, res: Response) => {
    res.send({
        "hello": "world"
    });
});
