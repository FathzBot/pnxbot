const Discord = require("discord.js");
const config = require("../../config.json")
const db = require("quick.db");

module.exports = {
    name: "giriş-çıkış-ayarla",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {
 
 
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
                .then(m => m.delete(5000));
        }

 let kanal = message.mentions.channels.first();
    if(!kanal)return message.channel.send("Önce bir tane kanal etiketlemelisin")

 if(kanal){
     db.set(`giris_cikis_${message.guild.id}`,kanal.id)
message.channel.send(kanal + " Kanalı giriş-çıkış kanalı olarak ayarlandı")
 }
    }
}