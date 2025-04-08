
const express = require("express");
const fs = require("node:fs");

const app = express();
const port = 3586;

app.use(express.json());

let db = {"user_0": "hi"};

async function load_data() {
	const data = await fs.readFile("./data.json", 'utf8', (err, data) => {
    		if (err) {
        		console.error(err);
       			 return;
    		}

    		db = JSON.parse(data);

	});
}

app.post("/send", (req, res) => {
        const user = req.body;
	console.log("user = ");
        console.log(user);
        db[`user_${Object.keys(db).length + 1}`] = user;
	console.log("db = ");
        console.log(db);

	fs.writeFile('./data.json', JSON.stringify(db, null, 2), (err) => {
		console.error("error", err);
	});

    }
);

app.listen(port, async () => {
    console.log(`HI IM ON PORT ${port}`);
    await load_data();
});

process.on('SIGINT', async () => {
    console.log("goodbye!"); 
    process.exit(0);
});
