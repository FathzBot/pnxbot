const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "emoji-ekle",
    category: "moderasyon",
    description: "s",
run: async (bot, message, args) => {
 
    if (!msg.member.hasPermission("MANAGE_EMOJI")) {
        return msg.reply("❌ Bu Komutu sadece Mesajları Yönet yetkisine sahip kişiler kullanabilir")
            .then(m => m.delete(5000));
    }

let link = args[0];
if(!link)return message.channel.send("Emoji linkini vermedin")

let isim = args[1];
if(!isim)return message.channel.send("Emojinin ismi ne olacak onu belirtmedin");


message.guild.createEmoji(`${link}`, `${isim}`)
  .then(emoji => message.channel.send(`${emoji.name} adında emoji kuruldu`))
  .catch(error => message.channel.send(error));

 }
}