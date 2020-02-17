const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "avatar",
    category: "kullanıcı",
    description: "s",
    run: async (bot, message, args) => {

        let kullanıcı = message.mentions.users.first() ? message.mentions.users.first() : message.author;
        if(kullanıcı){
let m = new Discord.RichEmbed()
.setDescription(kullanıcı + " Kullanıcısının Avatarı:")
.setImage(kullanıcı.avatarURL)
.setColor(config.renk)
message.channel.send(m);
    }
    }
}