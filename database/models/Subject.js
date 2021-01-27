import mongoose from "mongoose";

const { Schema } = mongoose;

const SubjectSchema = new Schema({
    name: { type: String, required: true, unique: true },
    boardID: { type: mongoose.Types.ObjectId, required: true, ref: "Board" },
    classID: { type: mongoose.Types.ObjectId, required: true, ref: "Class" },
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

export default mongoose.model("Subject", SubjectSchema);
