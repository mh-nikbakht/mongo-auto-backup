const express = require("express");
const app = express();
require("dotenv").config();
const mdl = require("./model");
const backup = require("./backup");

/**
 * Demo backup every minutes.
 * Remove the params you will get default timer at 2AM daily.
 */
backup("* * * * *")
	.then((r) => {
		console.log(r);
	})
	.catch((e) => {
		console.log(e);
	});
app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});
