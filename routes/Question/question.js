import express from "express";

import QuestionService from "../../utils/Services/db/QuestionService.js";

const questionRouter = express.Router();

// @route GET /question/all
// @desc Get all question
// @access Public
questionRouter.get("/all", async (_req, res, next) => {
    try {
        const listDocs = await QuestionService.findAllQuestions();

        return res.json({ status: true, data: listDocs });
    } catch (error) {
        next(error);
    }
});

// @route POST /question/add
// @desc Add a new question in database
// @access Public
questionRouter.post("/add", async (req, res, next) => {
    const { categoryID, chapterID, classID, boardID, topicID, text, marks, answer, solution, options } = req.body;
    try {
        await QuestionService.addNewQuestion({
            categoryID,
            chapterID,
            classID,
            boardID,
            topicID,
            text,
            marks,
            answer,
            solution,
            options,
        });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @route PUT /question/edit
// @desc Edit question database
// @access Public
questionRouter.put("/edit", async (req, res, next) => {
    const topicID = req.body.topicID;
    const name = req.body.name;

    try {
        await QuestionService.editQuestion({ name, topicID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @DELETE /question/delete
// @desc Delete a question from db
// @access Public
questionRouter.delete("/delete", async (req, res, next) => {
    const topicID = req.body.topicID;

    try {
        await QuestionService.deleteQuestion({ topicID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

export default questionRouter;
