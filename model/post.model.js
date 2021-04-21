const mongoose = require("mongoose")
// Recall how exports work in Node.js?
const PostSchema = require('../schema/post.schema').PostSchema

const PostModel = mongoose.model("post", PostSchema);

function insertPost(post) {
    return PostModel.create(post);
}

function findPostById(id) {
    return PostModel.findById(id).exec();
}

// For anyone using the Node.js driver instead of Mongoose, 
// you'll want to use {returnOriginal:false} instead of {new:true}.

function updatePostById(id, updateMap) {

    let success = true;

    PostModel.findByIdAndUpdate(id, updateMap, function(err){
        if(err){
            success = false;
        }
    });
    return success;
}

module.exports = {
    insertPost,
    findPostById
};