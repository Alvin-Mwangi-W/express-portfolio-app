var express = require('express');
var router = express.Router();

// const firebaseApp = firebase.app();

/* GET home page. */
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

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      res.redirect('/contacts');
    })
    .catch((error) => {
      res.render('login', { error: req.flash(message) });
    });
});

router.get('/business_contacts', (req, res) => {
  // Retrieve business contacts from Firebase database and render the contacts page with the data
  const contactsData = firebase.database().ref('contacts');

  // res.render('business_contacts', { contacts: contactsData });
  res.render('business_contacts'), { title: 'Bs Contacts'};
});

router.get('/update', (req, res) => {
  res.render('update');
});

router.post('/update', (req, res) => {
  const user = firebase.auth().currentUser;
  user.updateEmail(req.body.email)
    .then(() => {
      res.render('update', { success: 'Email updated successfully!' });
    })
    .catch((error) => {
      res.render('update', { error: error.message });
    });
});

module.exports = router;
