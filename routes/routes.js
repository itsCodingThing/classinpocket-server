import express from "express";

import boardRouter from "./Board/board.js";
import classRouter from "./Class/class.js";
import subjectRouter from "./Subject/subject.js";
import topicRouter from "./Topic/topic.js";
import chapterRouter from "./Chapter/chapter.js";

const router = express.Router();

router.use("/board", boardRouter);
router.use("/class", classRouter);
router.use("/subject", subjectRouter);
router.use("/topic", topicRouter);
router.use("/chapter", chapterRouter);

export default router;
