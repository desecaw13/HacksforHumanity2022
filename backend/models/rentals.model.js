const mongoose = require('mongoose')

const Rentals = new mongoose.Schema({
    name: { type: String },
    img: { type: String},
    rate: { type: String }
},
    { collection: 'rentals' }

)

const model = mongoose.model('Rentals', Rentals)

module.exports = model  