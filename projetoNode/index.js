const functions = require("firebase-functions");
const firebase = require('firebase-admin');
const cors = require('cors')({ origin: true });
const app = require("express")();
firebase.initializeApp();



app.get("/atari", function (request, response) {
    firebase.database().ref("listaDeImagem").on('value', function (snapshot) {
        let res = snapshotToArray(snapshot)
        response.json(res);
    })

    function snapshotToArray(snapshot) {
        let retunrArr = []

        snapshot.forEach(function (childSnapshot) {
            let item = childSnapshot.val();
            item.key = childSnapshot.key

            retunrArr.push(item)
        })

        let numberRandom = Math.floor(Math.random() * 10 + 1)

        return retunrArr[numberRandom]
    }
})




exports.API = functions.https.onRequest(app)





