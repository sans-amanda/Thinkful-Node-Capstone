const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//--USER SCHEMA
const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    // hash & salt later for auth and jwt stuff
});

userSchema.methods.serialize = function () {
    return {
        email: this.email || "",
        username: this.username || "" ,
    };
};
  
const User = mongoose.model("Users", userSchema);
//db.users



//--COMMENT SCHEMA
const commentSchema = mongoose.Schema({
    content: { type: String, required: true }
});

commentSchema.methods.serialize = function () {
    return {
        content: this.content || ""
    };
};

const Comments = mongoose.model("Comments", commentSchema);
//db.comments




//--POST SCHEMA
const postSchema = mongoose.Schema({
    id: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    comments: [ commentSchema ],
    likes: { type: Number },
    archive: { type: Boolean, default: false }
});

postSchema.methods.serialize = function () {
    return {
        id: this._id || "" ,
        body: this.body || "" ,
        comments: this.comments || "" ,
        like: this.likes || ""
    };
};

const Post = mongoose.model("Posts", postSchema);
//db.posts



//--Before Post, get Comments
postSchema.pre("find", function(next) {
    this.populate("comments");
    next();
  });

postSchema.pre("findOne", function(next) {
    this.populate("comments");
    next();
  });
  




//--EXPORTS
module.exports = {
  User,
  Post,
  Comments
};