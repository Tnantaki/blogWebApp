import express from "express";
import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const blogs = [];
let	countId = 0;
// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extende: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
	const data = {blogs: blogs};
	res.render("index.ejs", data);
});

app.get("/read/:id", (req, res) => {
	const data = blogs[parseInt(req.params.id, 10)];
	res.render("read.ejs", data);
});

app.get("/post", (req, res) => {
	res.render("post.ejs");
});

app.get("/about", (req, res) => {
	res.render("about.ejs");
});

app.post("/submit", (req, res) => {
	const obj = req.body;
	blogs.push(new Blog(obj.name, obj.header, obj.content));
	const data = {blogs: blogs};
	res.render("index.ejs", data);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});

function Blog(name, header, content) {
	this.id = countId++;
	this.writer = name;
	this.header = header;
	this.content = content;
}

const loremCon = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita accusamus possimus ad? Tempora ab animi beatae qui illo? Dignissimos ex porro minima excepturi atque deserunt repellendus, totam beatae. Architecto deserunt minus labore qui amet error quibusdam ut molestias, fuga provident veniam nemo nesciunt excepturi quae quos illo. Rem assumenda dolorum tempora corrupti tenetur sequi iusto commodi ipsa cumque numquam a nisi, iure perferendis ipsum sed, voluptates quasi. Commodi, corrupti exercitationem soluta ullam reprehenderit, earum cumque consectetur animi odio nulla molestiae, illum iusto. Tempore sapiente nihil voluptate rem commodi tenetur quasi laudantium repellat, officia facilis error! Sed, dolore. Magnam at harum minus doloremque tenetur modi adipisci culpa. Velit adipisci harum facilis doloribus magni at animi earum eius. Provident consequuntur delectus ab illum incidunt aut? Iusto natus soluta sint dolor eos, totam fugiat sed quae! Cupiditate voluptatum quia sit nesciunt repudiandae quam a minima? Omnis cum possimus corporis est consequatur quidem, sed error enim sit, tempore debitis blanditiis rerum minus dicta libero officia nobis cumque veniam. Similique est consectetur, animi eveniet cum beatae a nam laboriosam! Laborum quibusdam facilis ut fuga eos assumenda dicta voluptatem similique. Nemo ipsa doloremque hic at rem et facilis, obcaecati dicta officia repellat dolores? Delectus exercitationem vitae repudiandae pariatur natus tempore cum ea in id? Earum reprehenderit aut explicabo quasi odit? Praesentium sapiente vel ad alias omnis numquam voluptatem eum distinctio neque fugiat quae libero quaerat, sint autem quo rem, itaque tempora odio consequatur possimus labore. Sit commodi ex, voluptatum modi doloribus consequuntur voluptas odit vitae corrupti temporibus odio ab cum corporis aperiam ut iusto ipsa? Quisquam, mollitia doloremque eligendi maiores sequi ea perferendis fuga facilis optio incidunt cum eius, at consequatur molestiae neque voluptatem. Culpa optio obcaecati provident molestiae impedit mollitia ex accusamus odio blanditiis magnam rerum temporibus quasi deserunt dolor porro facilis illum debitis voluptate a explicabo maxime quod, numquam harum ipsum! Dolores odio non at, amet sunt suscipit tempora maiores asperiores quam a excepturi nulla inventore atque voluptas labore, veniam cupiditate, saepe aliquid corporis repellendus quidem fugit dignissimos deserunt? Provident consectetur nam maxime, quas illum aliquam. Quo ducimus odit sint unde eligendi laborum blanditiis cupiditate? Molestiae aspernatur amet reiciendis laboriosam tenetur rerum sit quibusdam quas vitae, praesentium sunt quis explicabo corrupti ut molestias nisi, optio sequi deserunt vero debitis necessitatibus. Corrupti earum quidem facere. Similique eligendi earum placeat, excepturi inventore minus laudantium adipisci nam hic at ea, consequuntur distinctio aspernatur optio nisi beatae fuga quibusdam obcaecati odit iste dicta quae voluptates neque quam? Itaque blanditiis nisi rerum corporis in deleniti quae at quidem modi repudiandae, quisquam iusto sapiente ut, veniam obcaecati minus, enim repellendus. Animi eius pariatur dolorem, neque excepturi veniam possimus minus dicta saepe cumque doloremque vero eligendi sit laborum dolorum maxime quae quia temporibus aperiam ut quidem dignissimos, doloribus natus? Modi, sapiente porro. Numquam ipsam ut tempora consequuntur repellendus, fugiat non alias itaque laboriosam modi cum, nemo, voluptates cupiditate necessitatibus esse quod amet praesentium accusantium iste suscipit labore aspernatur quos iure quo! Aliquid, repellendus error recusandae veniam nostrum consequatur quos placeat tenetur."


blogs.push(new Blog("John", "How to go to the mood", loremCon));
blogs.push(new Blog("Mariana", "Can human run on water", loremCon));
blogs.push(new Blog("Catheon", "If I have 2 world", loremCon));
blogs.push(new Blog("Nine Eleven", "Human always born to addicted to something", loremCon));

