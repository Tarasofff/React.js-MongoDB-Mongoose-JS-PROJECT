const mongoose = require('mongoose');

//schema
const NoteSchema = new mongoose.Schema(
    {
        data: Object
    },
);

module.exports =  mongoose.model('NoteModel', NoteSchema)