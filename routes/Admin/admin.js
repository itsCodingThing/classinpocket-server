import express from "express";

import BoardService from "../../utils/Services/db/BoardService.js";

const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

adminRouter.get("/board", async (req, res) => {
    const list = await BoardService.findAllBoards();
    res.render("board", { data: list });
});

adminRouter.get("/edit-board/:name/:id", async (req, res) => {
    const { id, name } = req.params;
    res.render("edit-board", { id, name });
});

export default adminRouter;
