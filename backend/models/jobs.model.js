const mongoose = require('mongoose')

const Jobs = new mongoose.Schema({
    title: { type: String },
    img: { type: String},
    skills: { type: Array },
    name: { type: String},
    location: { type: String }

},
    { collection: 'jobs' }

)

const model = mongoose.model('JobData', Jobs)

module.exports = model  