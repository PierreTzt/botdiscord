const { MessageEmbed } = require("discord.js");

const embed = new MessageEmbed()
    .setColor(`YELLOW`) // ou .setColor(`#0099ff`)
    .setTitle(`COMMENT VOTER`)
    .setAuthor(`Corner Geek`, `https://cdn.discordapp.com/emojis/790939549681057814.png`)
    // .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mtxserv.com/fr/')
    .setDescription(`👍 Tu souhaites nous soutenir ?\n👍 Envie de nous donner un coup de pouce ?\n`)
    // .setFooter("Pied de page du message")
    .setImage(`https://top-serveurs.net/upload/5fbab666bc13f-4564086%20-%20Copy.jpg`)
    // .setThumbnail(`https://mtxserv.com/uploads/banners/ae49ad104085151cbb44e27fffd9f16862cb6f2c.png`)
    // .setTimestamp() // Vous pouvez passer un objet Date() en argument
    // Fields
    // Sur une ligne complète :
    .addField(`Tu peux le faire en votant pour nous ! N'hésite pas !`,`Cela prends **2 secondes** et nous apporte une plus grande visibilité pour pouvoir amener plus de monde ! `)
    // Plusieurs sur une même ligne :
    .addField(`Top-Serveur`,`[ici](https://top-serveurs.net/discord/corner-geek)`, true)
    .addField(`Disbord`,`!d bump dans le chat`, true)
    .addField(`DiscordDL`,`$bump dans le chat ou [ici](https://www.discordl.org/serveurs/778368411620474910)`, true)
    .addField(`1 vote par IP toutes les 2 heures !`,`Et en plus pas besoin d'inscription !`)

module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    activity: {
        name: '!vote pour nous soutenir',
        type: 'WATCHING',
    }
});

client.on('message', message => {
        if(message.author.bot) {
          return null                 //returns nothing if the message author is the bot
        
      
      } else if (message.content.startsWith(`!spam`)) {
          
          timerId = setInterval(() => {                                           //starts to spams the channel
              message.channel.send(embed);
          }, 7800000);   
      
      
      } else if (message.content.startsWith(`!stop`)) {
      
          clearInterval(timerId);
          message.channel.send('condition met');
      
      }
    }
)
}