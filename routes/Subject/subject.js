import express from "express";

import SubjectService from "../../utils/Services/db/SubjectService.js";

const subjectRouter = express.Router();

// @route GET /subject/all
// @desc Get all subject
// @access Public
subjectRouter.get("/all", async (_req, res, next) => {
    try {
        const listDocs = await SubjectService.findAllSubjects();

        return res.json({ status: true, data: listDocs });
    } catch (error) {
        next(error);
    }
});

// @route POST /subject/add
// @desc Add a new subject in database
// @access Public
subjectRouter.post("/add", async (req, res, next) => {
    const name = req.body.name;
    const boardID = req.body.boardID;
    const classID = req.body.classID;

    try {
        await SubjectService.addNewSubject({ name, boardID, classID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @route PUT /subject/edit
// @desc Edit subject database
// @access Public
subjectRouter.put("/edit", async (req, res, next) => {
    const subjectID = req.body.subjectID;
    const name = req.body.name;

    try {
        await SubjectService.editSubject({ name, subjectID });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @DELETE /subject/delete
// @desc Delete a subject from db
// @access Public
subjectRouter.delete("/delete", async (req, res, next) => {
    const subjectID = req.body.subjectID;

    try {
        await SubjectService.deleteSubject(subjectID);

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

export default subjectRouter;
