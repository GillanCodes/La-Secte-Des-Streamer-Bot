module.exports = {
    joke : function(prefix, message, Discord){

        if (message.content === prefix+"joke"){

            function embed(joketitle, joke){
                var embed = new Discord.RichEmbed()
                    .setTitle('BLAGUE A DEUX BALLES')
                    .setColor('0xFFFFFF')
                    .addField(joketitle, joke)
                    .setFooter('Request by ' + message.author.username + ' | Joke get on topito.com')

                    message.channel.send({embed}).then(function(message){
                            message.react(message.guild.emojis.get('538822189189955614'))
                                .catch(console.error);
                            message.react(message.guild.emojis.get('538822220315754506'))
                                .catch(console.error);
                            })
                        
            }


            switch(Math.floor(Math.random()* 7)){
                case 0:
                    embed("Quelle mamie fait peur aux voleurs ?", "Mamie Traillette")
                    break;
                case 1:
                    embed("Quel est le bar préféré des espagnols ?" ,"Le Bar-celone")
                    break;
                case 2:
                    embed("Pourquoi est-ce que les livres ont-ils toujours chaud ?" ,"Parce qu’ils ont une couverture")
                    break;
                case 3:
                    embed("Que se passe-t-il quand 2 poissons s'énervent ?" ,"Le thon monte")
                    break;
                case 4:
                    embed("Quel fruit est assez fort pour couper des arbres?" ,"Le ci-tron")
                    break;
                case 5:
                    embed("Que dit une imprimante dans l'eau ?" ,"J’ai papier")
                    break;
                case 6:
                    embed("Quel est l'aliment le plus hilarant?" ,"Le riz")
                    break;
            }
        }
    }
}