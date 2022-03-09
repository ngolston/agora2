const { Schema, model } = require("mongoose");

const communitySchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },
  relatedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

communitySchema.virtual("postCount").get(function () {
  return this.relatedPosts.length;
});

const Community = model("Community", communitySchema);

module.exports = Community;
