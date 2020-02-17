const {RichEmbed} = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "bot-davet",
    category: "bilgiler",
    description: "s",
    run: async (bot, message, args) => {
 
 let s = new RichEmbed()
 .setDescription("Bot Davet Linki")
 .addField("Arkadaşlarına botu tavsiye edeceğin ve arkadaşların sunucularına ekleye bilmesi için botun", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=677917225721790497&scope=bot&permissions=8)")
.setColor(config.renk)
message.channel.send(s);
    }
}