const {db} = require('../config')
const getChats = (req, res) => {
    db.ref('/chats')
        .once('value')
        .then((snap)=> {
            // let temp = snap.val()
            // let chats = []
            // for (key in temp) {
            //     let obj = {
            //         uid: key,
            //         temp
            //     }
            //     chats.push(obj)
            // }

            // res.json({
            //     msg: 'Get Users',
            //     chats,
            //     status: 200
            // })
            let temp = snap.val()
            let chats = []
            for (key in temp) {
                // temp[key].uid = key
                chats.push(temp[key])
            }
            chats.forEach((chat)=> {
                let arr = []
                for (key in chat) {
                    console.log(">>>>>"+key)
                    // console.log("<<<<<<",chat[key])
                    for (i in chat[key]) {
                        chat[key][i]["uid"] = i
                        arr.push(chat[key][i])
                    }
                    arr[arr.length-1] = {
                        last_message: arr[arr.length-1]
                    }
                    chat[key] = arr
                }
            })
            res.json({
                msg: 'Get chats',
                chats,
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

module.exports = {getChats}