const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

// Home Page
app.get('/', (req, res) => {
  res.render('home', { currentPage: 'home' });
});

// Introduction Page
app.get('/introduction', (req, res) => {
  res.render('introduction', { currentPage: 'introduction' });
});

// Data Privacy Guide Page
app.get('/data-privacy-guide', (req, res) => {
  res.render('data-privacy-guide', { currentPage: 'data-privacy-guide' });
});

// Privacy Act Page
app.get('/privacy-act', (req, res) => {
  res.render('privacy-act', { currentPage: 'privacy-act' });
});

// GDPR Page
app.get('/gdpr', (req, res) => {
  res.render('gdpr', { currentPage: 'gdpr' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Running at Port ${PORT}`);
});
