var express = require('express');
var router = express.Router();


// Hardcoded user data for authentication
const user = {
  username: 'admin',
  password: 'password'
};

// Login Route
router.post('/login', (req, res) => {
  if (req.body.username === user.username && req.body.password === user.password) {
    // Authenticated, redirect to Business Contacts List View
    res.redirect('/business-contacts');
  } else {
    // Not Authenticated, redirect back to Login View
    res.redirect('/login');
  }
});

// Check if user is authenticated 
router.get('/business-contacts', (req, res) => {
  if (!req.session.authenticated) {
    // Not authenticated, redirect back to Login View
    res.redirect('/login');
  } else {
    // Authenticated, render Business Contacts List View
    res.render('business-contacts');
  }
});


// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
