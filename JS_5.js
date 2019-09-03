//Fetch Blockchain API from blockchain.com
// This returns the latest Bitcoin block information

const fetch = require("node-fetch");
fetch('https://blockchain.info/latestblock').then(function (response) {
    return response.json();
}).then(function (myJson) {
    console.log(myJson);
});