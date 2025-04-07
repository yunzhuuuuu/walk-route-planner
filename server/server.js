
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3586;

app.use(express.json())

db = {}

fs.readFile("./data.json", 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    db = data;

});

app.post("/send", (req, res) => {
        const user = JSON.parse(req.body);
        db[`user_${Object.keys(db).length + 1}`] = user;
    }
);

app.listen(port, () => {
    console.log(`HI IM ON PORT ${port}`);
});

process.on('SIGINT', function() {
    console.log("goodbye!");
    fs.writeFile('./data.json', JSON.stringify(db), (err) => {
        console.log("hey...not working uwu");
    });
    process.exit(0);
})