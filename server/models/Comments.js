const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200,
    },
    contentType: {
      type: String,
      enum: ["TEXT", "PHOTO"],
      default: "TEXT",
    },
    authorUsername: {
      type: String,
      required: true,
    },
    communityId: {
      type: String,
      required: true,
    },
    reactions: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

commentSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Comments = model("Comments", commentSchema);

module.exports = Comments;
