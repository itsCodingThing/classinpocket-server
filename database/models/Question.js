import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const QuestionSchema = new Schema({
    categoryID: { type: Types.ObjectId, required: true, ref: "Category" },
    chapterID: { type: Types.ObjectId, required: true, ref: "Chapter" },
    subjectID: { type: Types.ObjectId, required: true, ref: "Subject" },
    classID: { type: Types.ObjectId, required: true, ref: "Class" },
    boardID: { type: Types.ObjectId, required: true, ref: "Board" },
    topicID: {
        type: Types.ObjectId,
        required: true,
        ref: "Topic",
    },
    text: { type: String, required: true },
    marks: { type: Number, required: true },
    answer: { optionName: { type: String, required: true }, answerBody: String, required: true },
    solution: { type: String, required: true },
    options: [{ optionName: String, optionBody: String }],
    createdDate: {
        type: Date,
        default: new Date(),
        required: true,
    },
    modifiedDate: {
        type: Date,
        default: new Date(),
        required: true,
    },
});

export default model("Question", QuestionSchema);
