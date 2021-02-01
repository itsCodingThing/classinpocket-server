import express from "express";
import morgan from "morgan";
import helmet from "helmet";
// import formData from "express-form-data";

import routes from "./routes/routes.js";

import errorHandler from "./utils/errorHandler.js";

const app = express();

// Set template engine
app.set("view engine", "ejs");

// Config middlewares for api
app.use(helmet());
app.use(express.json());
// app.use(formData());
// app.use(morgan("dev"));

// Public static files
app.use(express.static("public"));

// Initiail route for mounting
app.use("/", routes);

// Error handler for whole app
app.use(errorHandler);

export default app;
