const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
  message.channel.send(`Prefix actuel : \`${settings.prefix}\``)
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;