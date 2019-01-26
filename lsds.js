const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

var conf = JSON.parse(fs.readFileSync('conf.json', "utf8"));
var prefix = conf.prefix;

client.login(conf.token);

client.on('ready', () => {
    client.user.setActivity('Modérationné', {type : "PLAYING"});
    //client.user.setAvatar('');
    console.log('[LSDs] Ready to go !');
});

client.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;


    //IMPORT DES COMMANDES
        var help = require('./commands/help.js');
        var streamers = require('./commands/streamers.js');

    //COMMANDES APP
        help.help(prefix, message, Discord);
        streamers.streamers(prefix, message, Discord, client);



});