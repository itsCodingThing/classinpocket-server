import mongoose from "mongoose";

const { Schema, Types, model } = mongoose;

const ClassSchema = new Schema({
    name: { type: String, required: true, unique: true },
    boardID: { type: Types.ObjectId, required: true, ref: "Board" },
    createdDate: { type: Date, default: new Date(), required: true },
    modifiedDate: { type: Date, default: new Date(), required: true },
});

export default model("Class", ClassSchema);
