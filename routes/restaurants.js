const express = require('express');
const router = express.Router();
const {getResto, getOneResto, addFoodResto, editFoodResto, deleteFood, editResto }  = require('../controller/restaurant-controller')
/* GET home page. */
router.get('/', getResto);
router.get('/:id', getOneResto);

router.post('/:id', addFoodResto )

router.put('/update/:id', editResto)
router.put('/update/:res_id/food/:food_uid', editFoodResto)

router.delete('/delete/:res_id/food/:food_uid', deleteFood)

module.exports = router;
