import express from "express";

import ClassService from "../../utils/Services/db/ClassService.js";

const classRouter = express.Router();

// @route GET /class/all
// @desc Get all Class
// @access Public
classRouter.get("/all", async (_req, res, next) => {
    try {
        const listDocs = await ClassService.findAllClasses();

        return res.json({ status: true, data: listDocs });
    } catch (error) {
        next(error);
    }
});

// @route POST /class/add
// @desc Add a new Class in database
// @access Public
classRouter.post("/add", async (req, res, next) => {
    const name = req.body.name;
    const id = req.body.boardID;

    try {
        await ClassService.addNewClass({ name, boardID: id });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @route PUT /class/edit
// @desc Edit Classs database
// @access Public
classRouter.put("/edit", async (req, res, next) => {
    const id = req.body.classID;
    const name = req.body.name;

    try {
        await ClassService.editClass({ name, id });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @DELETE /class/delete
// @desc Delete a Class from db
// @access Public
classRouter.delete("/delete", async (req, res, next) => {
    const id = req.body.classID;

    try {
        await ClassService.deleteClass(id);

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

export default classRouter;
