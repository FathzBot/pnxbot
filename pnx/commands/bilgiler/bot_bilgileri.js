const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "bot-bilgi",
    category: "bilgiler",
    description: "s",
    run: async (bot, message, args) => {

        var msgArray = [];
        msgArray.push(`**${bot.user.username} Uptime**\n`);
        var hrs = Math.round(bot.uptime / (1000 * 60 * 60)) + " saat(s),"
        var mins = " " + Math.round(bot.uptime / (1000 * 60)) % 60 + " dakika(dk), "
        var sec = Math.round(bot.uptime / 1000) % 60 + " saniye(s)"
        if (hrs == "0 saat(s),") hrs = ""
        if (mins == " 0 dakika(dk), ") mins = ""
    
    const bilgi = new Discord.RichEmbed()
    .setTitle(bot.user.username + " Bot Bilgileri")
    .addField("Botun Kodlandığı Dil","Discord.js",true)
    .addField("Sunucu Sayısı",bot.guilds.size,false)
    .addField("Botu Kodlayan kişi","Kaan.PnX",true)
    .addField("Botun Açıklaması","Kaan.PnX: Türkçe Bot işte ne olmasını istiyorsun .d")
    .addField("Botun açık kalma süresi", hrs + mins + sec,true)
    .setThumbnail(bot.user.avatarURL)
    .setColor(config.renk)
    message.channel.send(bilgi);
    }
}