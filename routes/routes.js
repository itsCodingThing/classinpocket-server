import express from "express";

import boardRouter from "./Board/board.js";
import classRouter from "./Class/class.js";
import subjectRouter from "./Subject/subject.js";
import topicRouter from "./Topic/topic.js";
import chapterRouter from "./Chapter/chapter.js";
import adminRouter from "./Admin/admin.js";
import convertRouter from "./convert.js";

const router = express.Router();

router.use("api/board", boardRouter);
router.use("api/class", classRouter);
router.use("api/subject", subjectRouter);
router.use("api/topic", topicRouter);
router.use("api/chapter", chapterRouter);
router.use("/", adminRouter);

router.use("/convert", convertRouter);

router.get("/ping", (req, res) => {
    res.send("pong");
});

export default router;
