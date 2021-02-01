import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    createdDate: { ype: Date, default: new Date(), required: true },
    modifiedDate: { type: Date, default: new Date(), required: true },
});

export default model("Category", CategorySchema);
