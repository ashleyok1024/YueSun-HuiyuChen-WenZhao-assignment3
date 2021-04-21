const Schema = require('mongoose').Schema;

exports.UserSchema = new Schema({
    // mongoose automically gives this an _id attribute of ObjectId
    username: { type: String, unique: true},
    password: String,
// this explicitly declares what collection we're using
}, { collection : 'users' });
