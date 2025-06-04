
const express = require('express');
const path = require('path');
const app = express();

// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use('/public', express.static('public'));

// Routes
app.get('/test', (req, res) => {
  res.render('test', { currentPage: 'test' });
});

app.get('/', (req, res) => {
  res.render('home', { currentPage: 'home' });
});

app.get('/introduction', (req, res) => {
  res.render('introduction', { currentPage: 'introduction' });
});

app.get('/challenges', (req, res) => {
  res.render('challenges', { activePage: 'challenges' });
});

app.get('/privacy-act', function (req, res) {
  res.render('privacy-act', { title: 'Privacy Act 2020' });
});

app.get('/principle-5', function (req, res) {
  res.render('principle-5', { title: 'Principle 5' });
});

app.get('/principle-6', function (req, res) {
  res.render('principle-6', { title: 'Principle 6' });
});

app.get('/principle-9', function (req, res) {
  res.render('principle-9', { title: 'Principle 9' });
});

app.get('/principle-11', function (req, res) {
  res.render('principle-11', { title: 'Principle 11' });
});

app.get('/gdpr', function (req, res) {
  res.render('gdpr', { title: 'GDPR' });
});

app.get('/health-data', function (req, res) {
  res.render('health-data', { title: 'Health Data' });
});

app.get('/nz-privacy-law', function (req, res) {
  res.render('nz-privacy-law', { title: 'NZ Privacy Law' });
});

app.get('/conclusion', function (req, res) {
  res.render('conclusion', { title: 'Conclusion' });
});

app.get('/privacy', (req, res) => {
  res.render('privacy-act');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
