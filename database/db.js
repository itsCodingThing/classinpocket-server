import mongoose from "mongoose";

export const connect = async (dburl) => {
    await mongoose.connect(dburl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        autoIndex: true,
        family: 4,
    });
};
