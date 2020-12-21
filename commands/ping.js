module.exports = {
  name : `ping`,
  desciption: `Pong!`,
  execute(message, args) {
        message.channel.send(`pong!`)
  }
}