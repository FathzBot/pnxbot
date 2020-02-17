const {RichEmbed} = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "bildir",
    category: "sahip",
    description: "Returns latency and API ping",
    run: async (bot, message, args) => {

        
let öneri = args.join(" ")
if(!öneri)return message.channel.send("Bildir komutunu kullana bilmek için öncelikle bir mesaj yazmalısın")

if(öneri){
let s = new RichEmbed()
.setDescription("Bildiriniz başarılı bir şekilde gönderildi.Teşekkürler :)")
.setColor(config.renk)
message.channel.send(s)

bot.channels.get("678202776198578177").send(message.author.tag + " Adlı kullanıcı " + message.guild.name + " Adlı sunucudan Açık bildirdi.Bildiri şu şekilde " + öneri)

}
    }
}