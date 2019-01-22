const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://food-delivery-e9a7e.firebaseio.com'
});
const db = admin.database()
module.exports = {db}