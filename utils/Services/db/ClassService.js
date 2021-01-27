import ClassModel from "../../../database/models/Class.js";
import SubjectModel from "../../../database/models/Subject.js";
import ChapterModel from "../../../database/models/Chapter.js";
import TopicModel from "../../../database/models/Topic.js";

export default class ClassService {
    static async findAllClasses() {
        // List of all classes or an array of classes
        const list = await ClassModel.find().select("-__v").lean();

        return list;
    }

    static async addNewClass({ name, boardID }) {
        // Add a new class in db
        const klass = await ClassModel({ name, boardID });
        await klass.save();
    }

    static async editClass({ name, id }) {
        // Edit current class in db

        const klass = await ClassModel.findById(id);
        klass.name = name;
        klass.modifiedDate = new Date();

        await klass.save();
    }

    static async deleteClass(id) {
        // Delete current class from db
        await ClassModel.findByIdAndDelete(id);
        await SubjectModel.deleteMany({ classID: id });
        await ChapterModel.deleteMany({ classID: id });
        await TopicModel.deleteMany({ classID: id });
    }
}
