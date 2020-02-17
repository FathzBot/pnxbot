const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "ping.",
    category: "bilgiler",
    description: "s",
    run: async (bot, message, args) => {

        let s = new Discord.RichEmbed()
        .setDescription(`Botun pingi ${Math.round(bot.ping)}ms`)
        .setColor(config.renk);
        message.channel.send(s);
    }
}