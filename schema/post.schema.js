const Schema = require('mongoose').Schema;

exports.PostSchema = new Schema({
    // mongoose automically gives this an _id attribute of ObjectId
    _id: String,
    title: String,
    editorID: String,
    postTime: {
        type: Date,
        default: Date.now,
    },
    commentIDList: [String],
    content: String,
    URL: String,
// this explicitly declares what collection we're using
}, { collection : 'post' });