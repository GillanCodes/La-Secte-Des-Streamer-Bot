module.exports = {
    mod : function(prefix, message, Discord, client){

        if (message.content.startsWith(prefix+"kick")){


            if (message.member.permissions.has('KICK_MEMBERS')){
                var mentionned = message.mentions.members.first()

                    if (mentionned == null){
                        message.reply('Pour kick quelqu\'un il faut le mentionner');
                    } else if(mentionned.id === message.author.id){
                        message.channel.send('Tu ne peux pas te self-kick');
                    } else {
                        try {

                            const embed = new Discord.RichEmbed()
                                .setTitle('KICK')
                                .setFooter(message.author.username + " a taper avé le marto")
                                .addField('Il a été kick grin fou', mentionned.user.username)
                                .setColor('0xff4f4f')

                            mentionned.kick()
                            message.guild.channels.find("id", "538841488122183701").sendMessage({embed}).then( (message)=> {
                                message.react(message.guild.emojis.get('538822220315754506'))
                            });
                          
                        } catch (error) {
                            message.channel.send('Il y a surement un probleme :thinking: ')
                            console.log(error)
                        }
                    }
            }
        }

        if (message.content.startsWith(prefix+"ban")){

            

            if (message.member.permissions.has('BAN_MEMBERS')){
                var mentionned = message.mentions.members.first()

                    if (mentionned == null){
                        message.reply('Pour BAN quelqu\'un il faut le mentionner');
                    } else if(mentionned.id === message.author.id){
                        message.channel.send('Tu ne peux pas te self-BAN');
                    } else {
                        try {

                            const embed = new Discord.RichEmbed()
                                .setTitle('BAN')
                                .setFooter(message.author.username + " a taper avé le marto")
                                .addField('Il a été ban grin fou', mentionned.user.username)
                                .setColor('0xff4f4f')
                        
                            mentionned.ban()
                            message.guild.channels.find("id", "538841488122183701").sendMessage({embed}).then( (message)=> {
                                message.react(message.guild.emojis.get('538822220315754506'))
                            });
                            
                            
                        } catch (error) {
                            message.channel.send('Il y a surement un probleme :thinking: ')
                            console.log(error)
                        }
                    }
            }
        }




    }
}