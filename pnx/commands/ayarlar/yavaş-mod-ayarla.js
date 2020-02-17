const Discord = require("discord.js");
const config = require("../../config.json")
const db = require("quick.db");

module.exports = {
    name: "yavaş-mod",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {
        
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
            .then(m => m.delete(5000));
    }

let sayi1 = args[0];
let sayi = Number(sayi1) ? Number(sayi1) : 0

let yavaş = message.channel.setRateLimitPerUser(sayi,"s");
if(yavaş){
message.channel.send("Artık kanala " + sayi + " saniyede bir yazabilecekler")
}

    }
}