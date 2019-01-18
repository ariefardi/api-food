const {db} = require('../config')
const getResto = (req, res) => {
    db.ref('/restaurants')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            console.log(temp)
            let restaurant = []
            for (key in temp) {
                temp[key].uid = key
                restaurant.push(temp[key])
            }
            res.json({
                msg: 'Get resto',
                restaurant,
                status: 200
            })
        })
        .catch(err=> {
            res.json({
                err,
                status: 500
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
                resto,
                status: 200
            })
        })
        .catch(err=> {
            res.json({
                err,
                status: 500
            })
        })
}
// const addResto = async (req, res) => {
//     try {
//         const getKey = await db.ref('/restaurants/').push().key
//         let obj = {
//             address: req.body.address,
//             img_url: req.body.img_url,
//             latitude: req.body.latitude,
//             longitude: req.body.longitude,
//             name: req.body.name,
//             rating: req.body.rating,
//             open_hours: {},
//             seller_id: req.body.seller_id
//         }
//         obj.open_hours["1"] = req.body.open_hours
//         const addFood = await db.ref('/restaurants/'+getKey).set({
//
//         })
//         console.log(getKey)
//         res.json({
//             msg: 'Add some Restaurant'
//         })
//     }
//     catch (e) {
//         res.json({
//             e
//         })
//     }
// }

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
                msg: "Berhasil Edit Restaurant",
                status: 202
            })
        })
        .catch(err=> {
            res.json({
                err,
                status: 500
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
            msg: 'Add some food',
            status: 200
        })
    }
    catch (e) {
        res.json({
            e,
            status: 500
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
                msg: "Berhasil Edit Food",
                status: 200
            })
        })
        .catch(err=> {
            res.json({
                err,
                status: 500
            })
        })
}

const deleteFood = (req, res) => {
    let uid = req.params.res_id
    let food_uid = req.params.food_uid
    db.ref('/restaurants/'+uid+'/foods/'+food_uid).set(null)
        .then(()=> {
            res.json({
                msg: "berhasil delete food",
                status: 200
            })
        })
        .catch(err=> {
            res.json({
                err,
                status: 500
            })
        })
}



module.exports = {getResto, getOneResto, addFoodResto, editFoodResto, deleteFood, editResto}