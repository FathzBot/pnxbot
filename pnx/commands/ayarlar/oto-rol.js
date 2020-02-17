const Discord = require("discord.js");
const config = require("../../config.json")
const db = require("quick.db");

module.exports = {
    name: "oto-rol",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
                .then(m => m.delete(5000));
        }

        let otorol = message.mentions.roles.first();
    if(!otorol)return message.channel.send("Önce Rolü etiketlemen gerek")

   db.set(`otorol_${message.guild.id}`,otorol.id)
message.channel.send(`Kullanıcılara otomatik ` + otorol.name + " rolü verilecek.")
    }
}