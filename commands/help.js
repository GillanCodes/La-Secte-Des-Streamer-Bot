module.exports = {
    help: function(prefix, message, Discord){

        if (message.content.toLowerCase() === prefix+"help" || message.content.toLowerCase() === prefix+"aide"){

            const embed = new Discord.RichEmbed()
                .setTitle('AIDE')
                .setColor(0xFFFFFF)
                .addField(prefix+'help / aide', 'Affiche cette page !')
                .addField(prefix+'azor', 'Obtient les liens vers Azor', true)
                .addField(prefix+'gillancodes / codess', 'Obtient les liens vers Codess', true)


                message.channel.send({embed})
        }
    }
}