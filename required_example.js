/*
** To use this bot, you should do the following things:
** - install nodeJS, npm, and discord.js
** - rename this file `required.js`
** - create a bot on your discord page
** - replace the secret token key with the one the app
** - run the bot by executing `node aubergine.js`
** enjoy this stupid thing...
*/

exports.startAubergine = function() {

	const Discord = require("discord.js");
	const aubergine = new Discord.Client();
	aubergine.login("SECRET TOKEN KEY");
	return aubergine;

}

