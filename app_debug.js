const express = require("express");
const app = express();
const port = 17720;
const path = require("path");
const fs = require("fs");

const homeStatic = express.static(path.join(__dirname, "public"));
const rtkStatic = express.static(path.join(__dirname, "rtk-joyo-comparer/Server/public"));

// やれやれだぜ
app.use("/static", ( req, res, next) => {
	if (req.header("Referer") != undefined)
		if (req.header("Referer").slice(-17) == "rtk-joyo-comparer")
			rtkStatic(req, res, next);
	else homeStatic(req, res, next); // bruv
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/html/index.html");
});


// for rtk-joyo-comparer site
app.get("/rtk-joyo-comparer", (req, res) => {
	res.sendFile(__dirname + "/rtk-joyo-comparer/Server/index.html");
});

app.all("*", (req, res) => {
	console.log("DOES NOT EXIST: ", req.url);
    res.send("<h1><b>404 not found</h1>");
});

app.listen(port, () => {
    console.log("Running on port " + port);
});