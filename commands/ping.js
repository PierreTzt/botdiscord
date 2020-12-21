module.exports = {
  name : `ping`,
  desciption: `Pong!`,
  execute(client, message, args) {
        message.channel.send(`pong!`)
  }
}