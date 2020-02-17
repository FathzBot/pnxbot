
const Discord = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: "rol-renk",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.reply("❌ Bu Komutu sadece Rolleri Yönet Yetkisine sahip kişiler kullanabilir")
                .then(m => m.delete(5000));
        }

let role = message.mentions.roles.first();
if(!role)return message.channel.send("Rolü belirtmedin")

let renk = args[1]

let s = ["#"]

if(!s.some(w => message.content.includes(s)))return message.channel.send("Hex Code olarak yaz")

if(!renk)return message.channel.send("Renki belirtmedin");

let değiştir = role.edit({
    color:renk
});

if(değiştir)return message.channel.send(role + " Adlı rolün rengi " + renk + " Olarak değiştirildi")


    }
}