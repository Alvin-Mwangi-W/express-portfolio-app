var express = require('express');
var router = express.Router();
// const collection = require('../db')

// Hardcoded user data for authentication
// const user = {
//   username: 'admin',
//   password: 'password'
// };

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

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Login" });
});



router.get("/business-contacts", (req, res) => {
  if (!req.session.user) return res.redirect('login');

  Contact.find({}).sort({ name: 1 }).exec(function(err, contacts) {
    if (err) {
        res.redirect('/login');
    }
    res.render('business-contacts', { contacts });
  });

  //res.render("business-contacts", { title: "Business Contacts" });
});

// function isAuthenticated(req, res, next) {
//   if (req.session.user) {
//       next();
//   } else {
//       res.redirect('/login');
//   }
// }

// route.get('/contacts', isAuthenticated, function(req, res) {
// });

// rou.post('/update-contact', isAuthenticated, function(req, res) {

// });

// app.post('/delete-contact', isAuthenticated, function(req, res) {
// });

router.post("/login", async (req, res) => {
  
  // const { username, password } = req.body;
  const data = {
    username: req.body.username,
    password: req.body.password
  }

  await collection.insertMany([data]);

  res.render('index');
  // const user = await db.collection("users").findOne({ username });

  // if (!user) return res.redirect("/login");

  // const isValid = await bcrypt.compare(password, user.password);

  // if (isValid) {
  //   req.session.user = user;

  //   return res.redirect("/business-contacts");
  // } else {
  //   return res.redirect("/login");
  // }
});




module.exports = router;
