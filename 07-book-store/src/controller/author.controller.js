const AuthorModel = require("../model/author.model");
const BookModel = require("../model/books.model");
const CommentModel = require("../model/comment.model");

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await AuthorModel.find()
      .populate("books")
      .populate({ path: "comments", select: "body -_id" });
    return res.send(allAuthors);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = new AuthorModel(req.body);
    const createdAuthor = await author.save();
    return res.send(createdAuthor);
  } catch (err) {
    return res.send(err);
  }
};

// DELETE -> http://localhost:3001/api/authors/:authorId
const deleteAuthor = async (req, res) => {
  const { authorId } = req.params;
  try {
    const foundUser = await AuthorModel.findById(authorId);
    if (foundUser) {
      try {
        let deletedUser = await AuthorModel.findByIdAndDelete(authorId);
        let deletedBooks = await BookModel.deleteMany({ creator: authorId });
        let deletedComments = await CommentModel.deleteMany({ user: authorId });
        return res.send({
          deletedUser: { ...deletedUser._doc },
          deletedBooks: { ...deletedBooks },
          deletedComment : { ...deletedComments }
        });
      } catch (err) {
        console.log(err);
        return res.send(err);
      }
    } else {
      return res.send({ message: "Author does not exist" });
    }
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  deleteAuthor,
};
