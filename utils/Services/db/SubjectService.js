import SubjectModel from "../../../database/models/Subject.js";
import ChapterModel from "../../../database/models/Chapter.js";
import TopicModel from "../../../database/models/Topic.js";

export default class SubjectService {
    static async findAllSubjects() {
        // List of all subjects
        const list = await SubjectModel.find().select("-__v").lean();

        return list;
    }

    static async addNewSubject({ name, boardID, classID }) {
        // Add new subject in db
        const subject = await SubjectModel({ name, boardID, classID });
        await subject.save();
    }

    static async editSubject({ name, subjectID }) {
        // Edit new subject in db
        const subject = await SubjectModel.findById(subjectID);
        subject.name = name;
        subject.modifiedDate = new Date();
        await subject.save();
    }

    static async deleteSubject(subjectID) {
        // Delete current subject
        await SubjectModel.findByIdAndDelete(subjectID);
        await ChapterModel.deleteMany({ subjectID });
        await TopicModel.deleteMany({ subjectID });
    }
}
