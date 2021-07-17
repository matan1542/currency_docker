let express = require('express');
let path = require('path');
let fs = require('fs');
let app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3002, function () {
    console.log("app listening on port 3000!");
});
