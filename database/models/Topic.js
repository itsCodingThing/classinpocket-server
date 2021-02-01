import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const TopicSchema = new Schema({
    name: { type: String, required: true, unique: true },
    boardID: { type: Types.ObjectId, required: true, ref: "Board" },
    classID: { type: Types.ObjectId, required: true, ref: "Class" },
    subjectID: { type: Types.ObjectId, required: true, ref: "Subject" },
    chapterID: { type: Types.ObjectId, required: true, ref: "Chapter" },
    createdDate: { type: Date, default: new Date(), required: true },
    modifiedDate: { type: Date, default: new Date(), required: true },
});

export default mongoose.model("Topic", TopicSchema);
