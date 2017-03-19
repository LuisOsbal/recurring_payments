/**
 * BookController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// Return books
	find: function(req, res) {
		Book.find({
			limit: 20,
			sort: "createdAt DESC"
		}).exec(function(err,docs) {
			return res.view('books/index', {books: docs});
		});
	},

	// Show book by id
	findOne:function (req, res) {
		Book.findOne({id: req.params.id}).exec( function (err, book) {
			if (err) alert.message( "Se cometio un error" + err );
			return res.view('books/show', { book: book } )
		});
	},

	// Create a new book
	new: function (req, res) {
		return res.view('books/new')
	},

	// Edit book by id
	edit: function (req, res) {
		Book.findOne({id: req.params.id}).exec( function (err, book) {
			if (err) alert.message( "Se cometio un error" + err );
			return res.view('books/edit', { book: book } )
		})
	},

	// Delete book by id
	delete: function (req, res) {
		Book.findOne({id: req.params.id}).exec( function (err, book) {
			if (err) alert.message( "Se cometio un error" + err );
			return res.view('books/delete', { book: book } )
		})
	}
};

