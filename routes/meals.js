const express = require('express')
const router = express.Router()
const Meal = require('../model/meal')
    // Meal.collection.deleteMany()  // DELETES ALL FROM MONGODB

// ## Get all Info
router.get('/', async(req, res) => {
    try {
        const my_meal = await Meal.find();
        res.json(my_meal)
    } catch (error) {
        res.send('Error: ' + error)
    }
});

// ## Get Specific Meal By ID
router.get('/:id', async(req, res) => {
    try {
        const my_meal = await Meal.findById(req.params.id);
        res.json(my_meal)
    } catch (error) {
        res.send('Error: ' + error)
    }
});

// ## Create new Meal
router.post('/', async(req, res) => {
    const meal = new Meal({
        _id: req.body._id,
        name: req.body.my_name,
        ingredients: req.body.ingredients,
        tasty: req.body.tasty
    })
    try {
        console.log(res.body)
        const m1 = await meal.save()
        res.json(m1)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// ## Update Specific Meal name (By ID)
router.patch('/:id', async(req, res) => {
    try {
        const meal = await Meal.findById(req.params.id)
        meal.name = req.body.name;
        const m1 = await meal.save()
        res.json(m1)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router