const {RichEmbed} = require("discord.js");
const config = require("../../config.json")
const hd = require("weather-js");
const snekfetch = require("snekfetch");

module.exports = {
    name: "hava-durumu",
    category: "kullanıcı",
    description: "s",
    run: async (bot, message, args) => {


hd.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    var current = result[0].current;
    var location = result[0].location;

    const embed = new RichEmbed()
    const s = new RichEmbed()
        embed.setThumbnail(current.imageUrl)
        embed.setAuthor(`${current.observationpoint} | Hava Durumu Bilgisi`, 'https://i.imgur.com/MygJlMV.png', 'https://www.msn.com/tr-tr/weather/')
        embed.addField(`Durum:`, current.skytext, false)
        embed.addField(`Zaman Dilimi:`, `UTC${location.timezone}`, false)
        embed.addField(`Ölçüm Birimi:`, `°${location.degreetype}`, false)
        embed.addField(`Sıcaklık:`, `${current.temperature} °${location.degreetype}`, false)
        embed.addField(`Hissedilen Sıcaklık:`, `${current.feelslike} °${location.degreetype}`, false)
        embed.addField(`Rüzgar Durumu:`, current.winddisplay, false)
        embed.addField(`Nem Oranı:`, `%${current.humidity}`, false)
        embed.setColor(config.renk)
        embed.setTimestamp()
        embed.setFooter(`${bot.user.username} | Hava Durumu`)
    message.channel.send(embed).then(x => x.delete(10000)).then(x => x.channel.send(s.setImage("https://j.gifs.com/y4Qwdj.gif").setColor(config.renk))).then(x => x.delete(5000))


})
    }
}