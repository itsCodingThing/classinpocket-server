import express from "express";

import TopicService from "../../utils/Services/db/TopicService.js";

const topicRouter = express.Router();

// @route GET /topic/all
// @desc Get all topic
// @access Public
topicRouter.get("/all", async (_req, res, next) => {
    try {
        const listDocs = await TopicService.findAllTopics();

        return res.json({ status: true, data: listDocs });
    } catch (error) {
        next(error);
    }
});

// @route POST /topic/add
// @desc Add a new topic in database
// @access Public
topicRouter.post("/add", async (req, res, next) => {
    const name = req.body.name;
    const boardID = req.body.boardID;
    const classID = req.body.classID;
    const subjectID = req.body.subjectID;
    const chapterID = req.body.chapterID;

    try {
        await TopicService.addNewTopic({ name, boardID, classID, subjectID, chapterID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @route PUT /topic/edit
// @desc Edit topic database
// @access Public
topicRouter.put("/edit", async (req, res, next) => {
    const topicID = req.body.topicID;
    const name = req.body.name;

    try {
        await TopicService.editTopic({ name, topicID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @DELETE /topic/delete
// @desc Delete a topic from db
// @access Public
topicRouter.delete("/delete", async (req, res, next) => {
    const topicID = req.body.topicID;

    try {
        await TopicService.deleteTopic({ topicID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

export default topicRouter;
