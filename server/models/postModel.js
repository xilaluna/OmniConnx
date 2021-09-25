module.exports = mongoose => {
    const postSchema = mongoose.Schema(
      {
         title: { type: String, required: true },
         content: { type: String, required: true },
        //  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      },
      { timestamps: { createdAt: "created_at" } }
      
    );
    //If you use this app with a front-end that needs id field instead of _id, you have to override toJSON 
    //method that map default object to a custom object. So the Mongoose model could be modified as following code:
    postSchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

    const Post = mongoose.model("post", postSchema);
    return Post;
  };
