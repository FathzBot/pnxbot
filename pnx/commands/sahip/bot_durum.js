const {RichEmbed} = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "bot-genel-durum",
    category: "sahip",
    description: "Returns latency and API ping",
    run: async (bot, message, args) => {

        var msgArray = [];
        msgArray.push(`**${bot.user.username} Uptime**\n`);
        var hrs = Math.round(bot.uptime / (1000 * 60 * 60)) + " saat(s),"
        var mins = " " + Math.round(bot.uptime / (1000 * 60)) % 60 + " dakika(dk), "
        var sec = Math.round(bot.uptime / 1000) % 60 + " saniye(s)"
        if (hrs == "0 saat(s),") hrs = ""
        if (mins == " 0 dakika(dk), ") mins = ""

let s = new RichEmbed()
.setDescription("Botun Genel Durumu Şöyle:")
.addField("Kaç Sunucuya hizmet veriyor:",bot.guilds.size,false)
.addField("Kaç Üyeye hizmet veriyor:",bot.users.size,false)
.addField("Shardslar:","0",false)
.addField("Botun açık kalma süresi", hrs + mins + sec,true)
.setColor(config.renk)
message.channel.send(s);
    }
}