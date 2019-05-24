let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let OrderSchema = new Schema({
    order: [
        {name: String},
        {quantity: Number},
        {price: Number}
    ],
    userInfo: [
        {
            name: String,
            surname: String,
            email: String,
            phone: Number,
            city: String
        }
    ],
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Order', OrderSchema);