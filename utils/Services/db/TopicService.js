import TopicModel from "../../../database/models/Topic.js";

export default class TopicService {
    static async findAllTopics() {
        // List of all topics or an array of all topics
        const list = await TopicModel.find().select("-__v").lean();

        return list;
    }

    static async addNewTopic({ name, boardID, classID, subjectID, chapterID }) {
        // Add  new topic to db
        const topic = await TopicModel({ name, boardID, classID, subjectID, chapterID });
        await topic.save();
    }

    static async editTopic({ topicID, name }) {
        // Edit current board in db
        const topic = await TopicModel.findById(topicID);
        topic.name = name;
        topic.modifiedDate = new Date();
        await topic.save();
    }

    static async deleteTopic({ topicID }) {
        // work on deleting question related data
        //
        // Delete current topic from db
        await TopicModel.findByIdAndDelete(topicID);
    }
}
