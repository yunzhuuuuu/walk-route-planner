
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3586;

app.use(express.json());

db = {};

fs.readFile("./data.json", 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    db = data;

});

app.post("/send", (req, res) => {
        const user = req.body;
        console.log(user);
        db[`user_${Object.keys(db).length + 1}`] = user;
        console.log(db);
    }
);

app.listen(port, () => {
    console.log(`HI IM ON PORT ${port}`);
});

process.on('SIGINT', () => {
    console.log("goodbye!");
    fs.writeFile('./data.json', JSON.stringify(db), (err) => {
        console.error("hey...not working uwu", err);
    });
    process.exit(0);
});