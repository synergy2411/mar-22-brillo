const AuthorModel = require("../model/author.model");
const BookModel = require("../model/books.model");
const CommentModel = require("../model/comment.model");

const getAllComment = async (req, res) => {
  try {
    const allComments = await CommentModel.find().populate({
      path: "user",
      select: "name -_id age",
    }).populate({
      path : "book",
      populate: {
        path : "creator"
      }
    });
    return res.send(allComments);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

// body user
const createComment = async (req, res) => {
  const { user, book } = req.body;
  const foundUser = await AuthorModel.findById(user);
  if (foundUser) {
    try {
      const comment = new CommentModel(req.body);
      const createdComment = await comment.save();
      await AuthorModel.findByIdAndUpdate(user, {
          $push : {comments : createdComment._id}
      })
      await BookModel.findByIdAndUpdate(book,{
        $push : { comments: createdComment._id }
      })
      return res.send(createdComment);
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  } else {
    return res.send({ message: "User not found" });
  }
};

module.exports = {
  getAllComment,
  createComment,
};
