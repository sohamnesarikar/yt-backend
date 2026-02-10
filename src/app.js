import express from "express";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./middlewares/error.middleware";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(globalErrorHandler());
