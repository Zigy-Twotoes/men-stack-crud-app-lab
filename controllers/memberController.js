const Member = require('../models/member.js')
const express = require('express');
const router = express.Router();



// Index     
router.get('/', async (req, res) => {
    res.render('index.ejs');
});
// router.get('/', async (req, res) => {
//     const mainCharacter = await Member.findOne({ main: req.param.name });
//     if(req.param.name === mainCharacter.name && req.param.password === mainCharacter.password) {
//         res.render(`character/:${mainCharacter.id}`);
//     } else {
//         console.log('incorrect username or password');
//     }  
// });

// New 
router.get('/character/new', async (req, res) => {
    res.render('character/new.ejs');
});
// Delete
 


// Update
router.get('/character/edit/', async (req, res) => {
    res.render('character/edit.ejs');
});

// Create
router.post('/character', async (req, res) => {
    const newCharacter = await Member.create(req.body);
    res.redirect(`character/character/${newCharacter.id}`)
})

// Edit
router.put('/character/character', async (req, res) => {
    const characterId = await Member.findOneAndUpdate(req.params.main, req.body);
    res.redirect(`/character/character/${characterId.id}`)    
})

// Show
router.get('/allCharacters', async (req, res) => {
    const characterArray = await Member.find({ });
    res.render('allCharacters.ejs', {characterArray});
});

router.get('/character/character/:memberid', async (req, res) => {
    const foundMem = await Member.findById(req.params.memberid)
    res.render('character/character.ejs', {member : foundMem})

});

router.delete('/character/character/:memberid', async (req, res) => {
    await Member.findByIdAndDelete(req.params.memberid)
    res.redirect('/')
 })



module.exports = router;


