import express from "express";

import ChapterService from "../../utils/Services/db/ChapterService.js";

const chapterRouter = express.Router();

// @route GET /chpater/all
// @desc Get all chapter
// @access Public
chapterRouter.get("/all", async (_req, res, next) => {
    try {
        const list = await ChapterService.findAllChapters();

        return res.json({ status: true, data: list });
    } catch (error) {
        next(error);
    }
});

// @route POST /chapter/add
// @desc Add a new chapter in database
// @access Public
chapterRouter.post("/add", async (req, res, next) => {
    const name = req.body.name;
    const boardID = req.body.boardID;
    const classID = req.body.classID;
    const subjectID = req.body.subjectID;

    try {
        await ChapterService.addNewChapter({ name, boardID, classID, subjectID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @route PUT /chapter/edit
// @desc Edit chapter database
// @access Public
chapterRouter.put("/edit", async (req, res, next) => {
    const chapterID = req.body.chapterID;
    const name = req.body.name;

    try {
        await ChapterService.editChapter({ name, chapterID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @DELETE /chapter/delete
// @desc Delete a chapter from db
// @access Public
chapterRouter.delete("/delete", async (req, res, next) => {
    const chapterID = req.body.chapterID;

    try {
        await ChapterService.deleteChapter(chapterID);

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

export default chapterRouter;
