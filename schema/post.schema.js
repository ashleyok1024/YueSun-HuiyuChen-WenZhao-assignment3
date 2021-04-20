const Schema = require('mongoose').Schema;

exports.PostSchema = new Schema({
    // mongoose automically gives this an _id attribute of ObjectId
    postID: String,
    title: String,
    
    postTime: {
        type: Date,
        default: Date.now,
    },
    health: {type: Number},
// this explicitly declares what collection we're using
}, { collection : 'post' });