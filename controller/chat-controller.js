const {db} = require('../config')
const getChats = (req, res) => {
    db.ref('/chats')
        .once('value')
        .then((snap)=> {
            let temp = snap.val()
            let chats = []
            for (key in temp) {
                let obj = {
                    uid: key,
                    temp
                }
                chats.push(obj)
            }
            chats.forEach((chat)=> {
                console.log(chat.temp)
                for (key in chat.temp) {
                    console.log(key)
                }
            })
            res.json({
                msg: 'Get Users',
                chats
            })
        })
}

module.exports = {getChats}