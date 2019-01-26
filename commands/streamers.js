module.exports = {
    streamers : function(prefix, message, Discord, client){

        if (message.content.toLowerCase() === prefix+"azor"){

            var logo = client.users.get('259235293113090048').displayAvatarURL;

            const embed = new Discord.RichEmbed()
                .setThumbnail(logo)
                .setTitle('AZOR INFOs')
                .setFooter('Request by ' + message.author.username)
                .setColor('0XFFFFFF')
                .addField('Twitch', 'https://www.twitch.tv/azorytb')
                .addField('Twitter', 'https://twitter.com/azorytb')


                message.channel.send({embed})
        }

        if (message.content.toLowerCase() === prefix+"codess" ||message.content.toLowerCase() === prefix+"gillancodes"){

            var logo = client.users.get('224252745505439744').displayAvatarURL;


            const embed = new Discord.RichEmbed()
                .setThumbnail(logo)
                .setTitle('CODESS INFOs')
                .setFooter('Request by ' + message.author.username)
                .setColor('0XFFFFFF')
                .addField('Twitch', 'https://www.twitch.tv/gillancodes')
                .addField('Twitter', 'https://twitter.com/gillancodes')
                .addField('Owner', 'Developpeur de LSDs')


                message.channel.send({embed});
        }

    }
}