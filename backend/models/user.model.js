const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    address: { type: String, required: true },
    points: { type: Number, default:0 }

},
    { collection: 'user-data' }

)

const model = mongoose.model('UserData', User)

module.exports = model  