const Discord = require("discord.js");
const config = require("../../config.json")
const db = require("quick.db");


module.exports = {
    name: "afk",
    category: "kullanıcı",
    description: "s",
    run: async (bot, message, args) => {
        message.delete(5000)
        var USER = message.author;
        let REASON = args.join(" ") ? args.join(" ") : "sebepsiz";
        var isim = message.member;
      
        db.set(`afk_${USER.id}`, REASON);
        db.set(`afk_süre_${USER.id}`, Date.now());
        
        const afkembed = new Discord.RichEmbed()
        .setTitle("Afk Mode")
        .setDescription(`Başarılı bir şekilde **${REASON}** sebebiyle afk moduna geçtiniz`)
        .setFooter(`Komutu Kullanan Kullanıcı ${message.author.tag}`)
        .setColor(config.renk)
        message.channel.send(afkembed).then(x => x.delete(5000))


    }
}