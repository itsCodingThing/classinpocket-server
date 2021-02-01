import express from "express";
import mathmlToLatex from "mathml-to-latex";

const convertRouter = express.Router();

convertRouter.get("/", (req, res, next) => {
    const convertString = req.body.data;
    const result = mathmlToLatex.convert(convertString);

    return res.json({ data: result });
});

export default convertRouter;
