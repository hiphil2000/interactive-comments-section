import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import {commentsRouter} from "./routes";

// prepare configurations
const port = parseInt(process.env.PORT || "", 10) || 5000;
const isDev = process.env.NODE_ENV !== "production";

// create app
const app = express();

// configure middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(morgan(isDev ? "dev" : "combined"));

// configure routes
app.use("/comments", commentsRouter);

// start listen port
app.listen(port);
console.log(`api-server is ready - listening on 0.0.0.0:${port}, url: http://localhost:${port}`);

// export app for testing or something else
export {
    app
};
