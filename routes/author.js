const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

//Add author

router.post("/", authorController.addAuthor );

//Get all authors
router.get("/", authorController.getAllAuthors);

//Get an author
router.get("/:id", authorController.getAnAuthor);

//Update an author
router.put("/:id", authorController.updateAuthor);

//Delete an author
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;