const express = require("express");
const app = express();
const port = 1770;
const path = require("path");
const fs = require("fs");

const homeStatic = express.static(path.join(__dirname, "public"));
const rtkStatic = express.static(path.join(__dirname, "rtk-joyo-comparer/Server/public"));
const utasukiStatic = express.static(path.join(__dirname, "UtaSuki/public"));

// serving two different statics based on where you are on the site
// feels stupid, but I don't want to hardcode inside of rtk-joyo-comparer
// since the request in there refers to this local public directory
// app.use("/static", ( req, res, next) => {
// 	if (req.header("Referer").slice(-17) == "rtk-joyo-comparer") {
// 		rtkStatic(req, res, next);
// 	} else {
// 		homeStatic(req, res, next);
// 	}
// });
app.use("/static", ( req, res, next) => {
	// console.log(req.url);
	// console.log(req.header("Referer").match("UtaSuki")[0]);
	if (req.header("Referer").slice(-17) == "rtk-joyo-comparer") {
		rtkStatic(req, res, next);
	} else {
		homeStatic(req, res, next);
	}
	// try { bara lös
	// 	if (req.header("Referer").match("UtaSuki")[0] == "UtaSuki") {
	// 		console.log("UTASUKI SOM FAN");
	// 		utasukiStatic(req, res, next);
	// 	} else {
	// 		homeStatic(req, res, next);
	// 	}
	// } catch(error) {
	// 	console.log("Error in your mum. I don't care");
	// 	homeStatic(req, res, next);
	// }
	
});



// for main site
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});


// for rtk-joyo-comparer site
app.get("/rtk-joyo-comparer", (req, res) => {
	res.sendFile(__dirname + "/rtk-joyo-comparer/Server/index.html");
});


// for UtaSuki site
app.get("/UtaSuki/", (req, res) => {
	res.sendFile(__dirname + "/UtaSuki/index.html");
});
// this is not optimal
app.get("/UtaSuki/add_item", (req, res) => {
	console.log("dirname: " + __dirname);
	res.sendFile(__dirname + "/UtaSuki/add_item.html"); 
});
app.get("/UtaSuki/year=*", (req, res) => {
	res.sendFile(__dirname + "/UtaSuki/base_year.html");
});


app.all("*", (req, res) => { // for everything else
	console.log("DOES NOT EXIST: ", req.url);
    res.send("<h1><b>404 not found</h1>");
});

app.listen(port, () => {
    console.log("Running on port " + port);
});