const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/new', (req, res) => {
  res.render('new');
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/tup.html");
});

router.get("/tup", (req, res) => {
  res.sendFile(__dirname + "/tup.html");
});

router.get("/member", (req, res) => {
  res.sendFile(__dirname + "/member.html");
});

router.get("/book", (req, res) => {
  res.sendFile(__dirname + "/book.html");
});

router.get("/sport", (req, res) => {
  res.sendFile(__dirname + "/sports.html");
});



router.post('/review', async (req, res) => {
  let note = await new Note({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    note = await note.save();
    res.redirect('/');
  } catch (e) {
    console.log(e);
    res.render('new');
  }
});

// router.delete('/:id', async (req, res) => {
//   await res.redirect('/');
// });

router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.redirect('/review');
  } catch (e) {
    console.log(e);
    res.redirect('/review');
  }
});

module.exports = router;
