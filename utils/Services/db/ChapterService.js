import ChapterModel from "../../../database/models/Chapter.js";

export default class ChapterService {
    static async findAllChapters() {
        // List of all chapters or array of chapter
        const list = await ChapterModel.find().select("-__v").lean();

        return list;
    }

    static async addNewChapter({ name, boardID, classID, subjectID }) {
        // Add new chapter in db
        const chapter = await ChapterModel({ name, boardID, classID, subjectID });
        await chapter.save();
    }

    static async editChapter({ chapterID, name }) {
        // Edit chapter in db
        const chapter = await ChapterModel.findById(chapterID);
        chapter.name = name;
        chapter.modifiedDate = new Date();
        await chapter.save();
    }

    static async deleteChapter(chapterID) {
        // need to delete topics
        //
        // Delete current chapter from db
        await ChapterModel.findByIdAndDelete(chapterID);
        await TopicModel.deleteMany({ chapterID });
    }
}
