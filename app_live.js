const express = require("express");
const app = express();
const port = 1770;
const path = require("path");
const fs = require("fs");
const https = require("https");

const privateKey = fs.readFileSync('/etc/letsencrypt/live/toralv.dev/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/toralv.dev/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/toralv.dev/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const homeStatic = express.static(path.join(__dirname, "public"));
const rtkStatic = express.static(path.join(__dirname, "rtk-joyo-comparer/Server/public"));

// Serving two different statics based on where you are on the site
// Feels stupid, but I don't want to hardcode inside of rtk-joyo-comparer
// since the request in there refers to this local public directory
app.use("/static", ( req, res, next) => {
	if (req.header("Referer").slice(-17) == "rtk-joyo-comparer") {
		rtkStatic(req, res, next);
	} else {
		homeStatic(req, res, next);
	}
});

app.get("/", (req, res) =>
{
	res.sendFile(__dirname + "/index.html");
});

app.get("/rtk-joyo-comparer", (req, res) =>
{
	res.sendFile(__dirname + "/rtk-joyo-comparer/Server/index.html");
});

app.all("*", (req, res) => { // for everything else
	console.log("sussy sus", req.url);
    res.send("<h1><b>404 not found</h1>");
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
    console.log("Running on port " + port);
});