const {db} = require('../config')
const getResto = (req, res) => {
    db.ref('/restaurants')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            let restaurant = []
            for (key in temp) {
                let obj = {
                    uid: key,
                    temp
                }
                restaurant.push(obj)
            }
            res.json({
                msg: 'Get resto',
                restaurant
            })
        })
        .catch(err=> {
            res.json({
                err
            })
        })
}

const getOneResto = (req, res) => {
    let uid = req.params.id
    db.ref('/restaurants/'+uid)
        .once('value')
        .then((snap)=> {
            let resto = snap.val()
            res.json({
                msg: "get one restaurant",
                resto
            })
        })
        .catch(err=> {
            res.json({
                err
            })
        })
}
const addResto = async (req, res) => {
    try {
        const getKey = await db.ref('/restaurants/').push().key
        const addFood = await db.ref('/restaurants/'+getKey).set({
            address: req.body.address,
            img_url: req.body.img_url,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            name: req.body.name,
            rating: req.body.rating,
            seller_id: req.body.seller_id
        })
        console.log(getKey)
        res.json({
            msg: 'Add some Restaurant'
        })
    }
    catch (e) {
        res.json({
            e
        })
    }
}

const editResto = (req, res) => {
    let uid = req.params.id
    let obj = {
        address: req.body.address,
        img_url: req.body.img_url,
        latitude: Number(req.body.latitude),
        longitude: Number(req.body.longitude),
        rating: req.body.rating,
        name: req.body.name,
        open_hours: {},
        seller_id: req.body.seller_id
    }
    obj.open_hours[req.body.key] = req.body.open_hours

    db.ref('/restaurants/'+uid).update(obj)
        .then(()=> {
            res.json({
                msg: "Berhasil Edit Restaurant"
            })
        })
        .catch(err=> {
            res.json({
                err
            })
        })
}

const addFoodResto = async (req, res) => {
    let uid = req.params.id
    try {
        const getKey = await db.ref('/restaurants/'+uid+'/foods').push().key
        const addFood = await db.ref('/restaurants/'+uid+'/foods/'+getKey).set({
            img: req.body.img,
            name: req.body.name,
            price: Number(req.body.price)
        })
        console.log(getKey)
        res.json({
            msg: 'Add some food'
        })
    }
    catch (e) {
        res.json({
            e
        })
    }
}

const editFoodResto = (req, res) => {
    let uid = req.params.res_id
    let food_uid = req.params.food_uid
    db.ref('/restaurants/'+uid+'/foods/'+food_uid).set({
        img: req.body.img,
        name: req.body.name,
        price: Number(req.body.price)
    })
        .then(()=> {
            res.json({
                msg: "Berhasil Edit Food"
            })
        })
        .catch(err=> {
            res.json({
                err
            })
        })
}

const deleteFood = (req, res) => {
    let uid = req.params.res_id
    let food_uid = req.params.food_uid
    db.ref('/restaurants/'+uid+'/foods/'+food_uid).set(null)
        .then(()=> {
            res.json({
                msg: "berhasil delete food"
            })
        })
        .catch(err=> {
            res.json({
                err
            })
        })
}



module.exports = {getResto, getOneResto, addFoodResto, editFoodResto, deleteFood, editResto}