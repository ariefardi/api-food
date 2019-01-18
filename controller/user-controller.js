const {db} = require('../config')
const getUsers = (req, res) => {
    db.ref('/users')
        .once('value')
        .then((snap)=> {
            let user = snap.val()
            let temp = []
            for (key in user) {
                let obj = {
                    uid: key,
                    user
                }
                temp.push(obj)
            }
            res.json({
                msg: 'Get Users',
                temp
            })
        })
}

const getOneUsers = (req, res) => {
    let uid = req.params.id
    db.ref('/users/'+uid)
        .once('value')
        .then((snap)=> {
            let resto = snap.val()
            res.json({
                msg: "get one user",
                resto
            })
        })
}

module.exports = {getUsers, getOneUsers}