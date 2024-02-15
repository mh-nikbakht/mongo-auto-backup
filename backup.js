const cmd = require("node-cmd");
const schedule = require("node-schedule");
/**
 * Time example: "0 2 * * *" Get a backup everyday at 2AM is the default.
 */
module.exports = function (time = "1 * * * * *") {
	return new Promise((res, rej) => {
		schedule.scheduleJob(time, function () {
			cmd.runSync(
				`mongodump  --host=localhost --port=27017 --db=${process.env.DB}  --out=./backup`,
				function (err, data, stderr) {
					if (err) return rej("Backup Error");
					return res("BACKUP SUCCESS AT " + new Date());
				}
			);
		});
	});
};
