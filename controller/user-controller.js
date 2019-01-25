const {db} = require('../config')
const getUsers = (req, res) => {
    db.ref('/users')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            let users = []
            for (key in temp) {
                temp[key].uid = key
                users.push(temp[key])
            }
            res.json({
                msg: 'Get Users',
                users,
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

const getOneUsers = (req, res) => {
    let uid = req.params.id
    db.ref('/users/'+uid)
        .once('value')
        .then((snap)=> {
            let user = snap.val()
            if (user) {
                res.json({
                    msg: "get one user",
                    user,
                    status: 200
                })
            }
            else {
                res.json({
                    error: "User not Found",
                    status: 404
                })
            }

        })
}

const getUserRole = (req,res) => {
    const uid = req.params.id
    db.ref('/users/'+uid)
        .once('value')
        .then((snap)=> {
            let user = snap.val()
            console.log(user)
            if (user) {
                res.json({
                    msg: "get one user",
                    role: user.position,
                    status: 200
                })
            }
            else {
                res.json({
                    error: "User not Found",
                    status: 404
                })
            }
        })
}

const getUsersLocations = (req, res) => {
    db.ref('/users_location')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            console.log(temp)
            let users_location = []
            for (key in temp) {
                temp[key].uid = key
                users_location.push(temp[key])
            }
            res.json({
                msg: 'Get Users Location',
                users_location,
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
const getOneUserLocations = (req, res) => {
    const uid = req.params.id
    db.ref('/users_location/'+uid)
        .once('value')
        .then((snap)=> {
            let user_location = snap.val()
            res.json({
                msg: "get one user location",
                user_location,
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



module.exports = {getUsers, getOneUsers, getUsersLocations, getOneUserLocations, getUserRole}