
const {RichEmbed} = require("discord.js")
const randomPuppy = require('random-puppy');


module.exports = {
    name: "random",
    category: "eğlence",
    description: "s",
    run: async (bot, msg, args) => {


randomPuppy()
.then(url => {
    msg.channel.send(url)
})

    }
}