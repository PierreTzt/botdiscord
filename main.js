const { Client, Message } = require('discord.js');
 const { PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);

//    console.log(args);

    const command = args.shift().toLowerCase();

//    console.log(command);

    if (command === 'Hey') message.channel.send ("Hey !");
    if (command === 'Bonjour') message.channel.send (`Bonjour de la part de tout ${message.guild.name}.`);
    if (command === 'Salut') message.channel.send (`Salut ${message.author.tag}`);
    if (command === 'userinfo') {
        const user_mention = message.mentions.users.first();
        message.channel.send(`Voici le tag de la personne mentionnée : ${user_mention.tag}.`)
    }
});

client.login(process.env.TOKEN);