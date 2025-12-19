const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'http://localhost:5000';

// Get all books
router.get('/books', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

// Get book by ISBN
router.get('/books/isbn/:isbn', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${req.params.isbn}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Get books by author
router.get('/books/author/:author', async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/author/${req.params.author}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Author not found' });
  }
});

// Get books by title
router.get('/books/title/:title', async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/title/${req.params.title}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Title not found' });
  }
});

module.exports = router;
