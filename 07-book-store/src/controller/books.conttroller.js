const AuthorModel = require("../model/author.model");
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
        const {creator} = req.body;
        const book = new BookModel(req.body);
        const foundUser = await AuthorModel.findById(creator)
        if(foundUser){
          const createdBook = await book.save()
          await AuthorModel.findByIdAndUpdate(creator, {
            $push : { books : createdBook.id }
          })
          console.log(foundUser)
          return res.send(createdBook)
        }else{
          return res.send({message : "Creator Not found for ID - " + creator})
        }
    }catch(err){
        return res.send(err)
    }
}

module.exports = {
  getAllBooks,createBook
};
