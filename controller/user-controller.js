const {db} = require('../config')
const getUsers = (req, res) => {
    db.ref('/users')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            let users = []
            for (key in temp) {
                let obj = {
                    uid: key,
                    temp
                }
                users.push(obj)
            }
            res.json({
                msg: 'Get Users',
                users
            })
        })
}

const getOneUsers = (req, res) => {
    let uid = req.params.id
    db.ref('/users/'+uid)
        .once('value')
        .then((snap)=> {
            let user = snap.val()
            res.json({
                msg: "get one user",
                user
            })
        })
}

const getUsersLocations = (req, res) => {
    db.ref('/users_location')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            let users_location = []
            for (key in temp) {
                let obj = {
                    uid: key,
                    temp
                }
                users_location.push(obj)
            }
            res.json({
                msg: 'Get Users Location',
                temp
            })
        })
        .catch(err=> {
            res.json({
                err
            })
        })
}
const getOneUserLocations = (req, res) => {
    const uid = req.params.id
    db.ref('/users_location/'+uid)
        .once('value')
        .then((snap)=> {
            let user_location = snap.val()
            res.json({
                msg: "get one user location",
                user_location
            })
        })
        .catch(err=> {
            res.json({
                err

            })
        })
}

module.exports = {getUsers, getOneUsers, getUsersLocations, getOneUserLocations}