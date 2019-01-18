const {db} = require('../config')
const getResto = (req, res) => {
    db.ref('/restaurants')
        .once('value')
        .then((snap)=> {
            let restaurant = snap.val()
            let temp = []
            for (key in restaurant) {
                let obj = {
                    uid: key,
                    restaurant
                }
                temp.push(obj)
            }
            res.json({
                msg: 'Get resto',
                temp
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
}

module.exports = {getResto, getOneResto}