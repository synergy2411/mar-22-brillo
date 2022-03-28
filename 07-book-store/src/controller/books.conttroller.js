const BookModel = require("../model/books.model");
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await BookModel.find().populate("creator");
    return res.send(allBooks);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const createBook = async (req, res) => {
    try{
        const book = new BookModel(req.body);
        const createdBook = await book.save()
        return res.send(createdBook)
    }catch(err){
        return res.send(err)
    }
}

module.exports = {
  getAllBooks,createBook
};
