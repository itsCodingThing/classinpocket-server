import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import routes from "./routes/routes.js";

import errorHandler from "./utils/errorHandler.js";

const app = express();

// Config middlewares for api
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// public static files
app.use(express.static("public"));

// Initiail route for mounting
app.use("/", routes);

// Error handler for whole app
app.use(errorHandler);

export default app;
