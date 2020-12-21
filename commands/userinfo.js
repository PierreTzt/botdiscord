module.exports = {
  name : `userinfo`,
  desciption: `Renvoie les informations d\'un utilisateur mentionné.`,
  execute(client, message, args) {
    const user_mention = message.mentions.users.first();
        message.channel.send(`Voici le tag de la personne mentionnée : ${user_mention.tag}.`)
  }
}