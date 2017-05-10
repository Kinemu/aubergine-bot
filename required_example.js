exports.startAubergine = function() {

	const Discord = require("discord.js");
	const aubergine = new Discord.Client();
	aubergine.login("SECRET TOKEN KEY");
	return aubergine;

}

