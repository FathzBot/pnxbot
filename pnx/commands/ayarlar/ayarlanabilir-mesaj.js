
const Discord = require('discord.js');
const db = require("quick.db");
const config = require("../../config.json")

module.exports = {
    name: "mesaj-ayarla",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
                .then(m => m.delete(5000));
        }

 let mesaj = args[0];
if(!mesaj)return message.channel.send("Hangi mesajı yazınca cevap vereceğini belirtmedin");

let ikinc = args[1];
if(!ikinc)return message.channel.send(mesaj + " Mesajına ne cevap vereceğini belirtmedin");

let ayarlar = db.set(`mesaj_${message.guild.id}`,mesaj);

let ayarlar2 = db.set(`mesaj2_${message.guild.id}`,ikinc);

if(ayarlar || ayarlar2)return message.channel.send(mesaj + " Mesajına " + ikinc + " Olarak cevap vericek");

    }
}