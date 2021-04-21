const Schema = require('mongoose').Schema;

exports.CommentSchema = new Schema({
    // mongoose automically gives this an _id attribute of ObjectId
    _id: String,
    title: String,
    editorID: String,
    postTime: {
        type: Date,
        default: Date.now,
    },
    content: String,
    URL: String,
    userID: String,
// this explicitly declares what collection we're using
}, { collection : 'comment' });