// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Declare any necessary variables or in-memory data structures here
let journalEntries = [];

// TASK: Define appropriate routes below
// ---------------------------------------------------
app.get('/addjournal', (req, res) => {
    res.render('addjournal');
});  
app.post('/addjournal', (req, res) => {
    // Extract data from the request body
    const { title, date, content } = req.body;
    const newEntry = { title, date, content };      
    journalEntries.push(newEntry);
    res.redirect('/');
});

//Define a route to render the index page
app.get('/', (req, res) => {
    res.render('index', { journalEntries });
});

// ---------------------------------------------------

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});