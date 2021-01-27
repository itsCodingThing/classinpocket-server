import mongoose from "mongoose";

const { Schema } = mongoose;

const BoardSchema = new Schema({
    name: { type: String, unique: true, required: true },
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

export default mongoose.model("Board", BoardSchema);
