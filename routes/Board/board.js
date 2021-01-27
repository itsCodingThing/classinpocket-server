import express from "express";

import BoardService from "../../utils/Services/db/BoardService.js";

const boardRouter = express.Router();

// @route GET /board/all
// @desc Get all boards
// @access Public
boardRouter.get("/all", async (_req, res, next) => {
    try {
        const listDocs = await BoardService.findAllBoards();

        return res.json({ status: true, data: listDocs });
    } catch (error) {
        next(error);
    }
});

// @route POST /board/add
// @desc Add a new board in database
// @access Public
boardRouter.post("/add", async (req, res, next) => {
    const name = req.body.name;
    console.log(name);

    try {
        await BoardService.addNewBoard(name);

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @route PUT /board/edit
// @desc Edit boards database
// @access Public
boardRouter.put("/edit", async (req, res, next) => {
    const id = req.body.boardID;
    const name = req.body.name;

    try {
        await BoardService.editBoard(id, { name });

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

// @DELETE /board/delete
// @desc Delete a board from db
// @access Public
boardRouter.delete("/delete", async (req, res, next) => {
    const id = req.body.boardID;

    try {
        await BoardService.deleteBoard(id);

        return res.status(200).send();
    } catch (error) {
        next(error);
    }
});

export default boardRouter;
