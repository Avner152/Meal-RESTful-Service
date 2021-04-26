const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "ID is needed."]
    },
    name: {
        type: String,
        required: [true, "name is required"]
    },
    ingredients: {
        type: Array,
        required: true
    },
    tasty: {
        type: Number,
        required: [true, "what do you think about the taste?"]
    }

});


module.exports = mongoose.model('Meal', mealSchema)