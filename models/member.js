const mongoose = require ('mongoose');
const memberSchema = new mongoose.Schema({
    main: String,
    sp: Number,
    isk: Number,
    password: String,
});

const Member = mongoose.model('Member', memberSchema)
module.exports = Member