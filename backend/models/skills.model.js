const mongoose = require('mongoose')

const Questions = new mongoose.Schema({
    questions: { type: String },
    answers: { type: Array},


},
    { collection: 'questions' }

)

const model = mongoose.model('Questions', Questions)

module.exports = model  