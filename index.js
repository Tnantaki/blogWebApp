import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});