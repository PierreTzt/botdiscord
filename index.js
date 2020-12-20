const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Ready');
    bot.user.setPresence({ activity: { name: 'regarde les étoiles'}}).catch(console.error);
})

bot.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `ping`) {
        message.reply('Jsuis pas ton pote !');
    }
    else if (command === `server`) {
        message.channel.send(`nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
    else if (command === `avatar`) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({format: 'png'})}`)
        }

        const avatarList = message.mentions.users.map(user => {
            return `L'avatar de ${user.username} est : ${user.displayAvatarURL({format: 'png'})}`;
        });

        message.channel.send(avatarList);
    }
});

bot.login(process.env.TOKEN);