import QuestionModel from "../../../database/models/Question.js";

export default class QuestionService {
    static async findAllQuestions() {
        // List of all baords or an array of all Questions
        const list = await QuestionModel.find().select("-__v").lean();

        return list;
    }

    static async findQuestionsTopicsID(idsList) {
        let list = [];

        if (Array.isArray(idsList)) {
            list = await QuestionModel.find({ _id: { $in: idsList } })
                .select("-__v")
                .lean();
        }

        return list;
    }

    static async addNewQuestion({
        categoryID,
        chapterID,
        classID,
        boardID,
        topicID,
        text,
        marks,
        answer,
        solution,
        options,
    }) {
        // Add a new Question in db
        const question = await QuestionModel({
            categoryID,
            chapterID,
            classID,
            boardID,
            topicID,
            text,
            marks,
            answer,
            solution,
            options,
        });
        await question.save();
    }

    static async editQuestion({ questionID, text, marks, answer, solution, options }) {
        // Edit current question in db
        const question = await QuestionModel.findById(questionID);
        question.text = text;
        question.marks = marks;
        question.answer = answer;
        question.solution = solution;
        question.options = options;
        question.modifiedDate = new Date();

        await question.save();
    }

    // TODO: find a way to delete rest of data in db
    static async deleteQuestion(questionID) {
        // Delete current Question from db
        await QuestionModel.findByIdAndDelete(questionID);
    }
}
