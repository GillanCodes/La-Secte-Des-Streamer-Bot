const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

var conf = JSON.parse(fs.readFileSync('conf.json', "utf8"));
var prefix = conf.prefix;

client.login(conf.token);

client.on('ready', () => {
	client.user.setActivity('Modérationner', {type : "PLAYING"});
    	client.user.setAvatar('https://orig00.deviantart.net/5e74/f/2011/057/b/6/blue_robot_girl_by_tehstreet-d3ahkb4.jpg');
    	console.log('[LSDs] Ready to go !');
});

client.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;


    //IMPORT OF COMMANDS
        var help = require('./commands/help.js');
        var streamers = require('./commands/streamers.js');
        var joke = require('./commands/joke.js');
        var mod = require('./commands/mod.js')

    //COMMANDS APP
        help.help(prefix, message, Discord);
        streamers.streamers(prefix, message, Discord, client);
        joke.joke(prefix, message, Discord);
        mod.mod(prefix, message, Discord, client)
});
