const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

//Add a book
router.post("/", bookController.addABook);
//Get all books
router.get("/", bookController.getAllBooks);
//Get a book
router.get("/:id", bookController.getABook);
//Update a book
router.put("/:id", bookController.updateBook);
//Delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;