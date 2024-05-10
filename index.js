import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

const port = 3000;
const app = express();
// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.get("/post", (req, res) => {
	res.render("post.ejs");
});

app.get("/about", (req, res) => {
	res.render("about.ejs");
});

app.post("/submit", (req, res) => {
	res.render("about.ejs");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});