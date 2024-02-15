const mongoose = require("mongoose");
// Connect to mongodb.
mongoose
	.connect("mongodb://127.0.0.1:27017/test", {
		useNewUrlParser: true,
	})
	.then((r) => {
		console.log("connect to mongodb success");
	})
	.catch((e) => {
		console.log("Fail to connect to mongodb");
		console.log(e);
	});
