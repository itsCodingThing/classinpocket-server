import BoardModel from "../../../database/models/Board.js";
import ClassModel from "../../../database/models/Class.js";
import ChapterModel from "../../../database/models/Chapter.js";
import SubjectModel from "../../../database/models/Subject.js";
import TopicModel from "../../../database/models/Topic.js";

export default class BoardService {
    static async findAllBoards() {
        // List of all baords or an array of all boards
        const list = await BoardModel.find().select("-__v").lean();

        return list;
    }

    static async addNewBoard(name) {
        // Add a new board in db
        // param: name
        const board = await BoardModel({ name: name });
        await board.save();
    }

    static async editBoard(id, { name }) {
        // Edit current board in db
        // param: id
        // param : {name}
        const board = await BoardModel.findById(id);
        board.name = name;
        board.modifiedDate = new Date();
        await board.save();
    }

    // TODO: find a way to delete rest of data in db
    static async deleteBoard(id) {
        // Delete current board from db
        // param: id
        await BoardModel.findByIdAndDelete(id);
        await ClassModel.deleteMany({ boardID: id });
        await ChapterModel.deleteMany({ boardID: id });
        await SubjectModel.deleteMany({ boardID: id });
        await TopicModel.deleteMany({ boardID: id });
    }
}
