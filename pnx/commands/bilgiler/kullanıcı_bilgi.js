const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "kullanıcı-bilgi",
    category: "bilgiler",
    description: "s",
    run: async (bot, message, args) => {

let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;
if (message.channel.type !== "group") {
  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    var Durum = usr.presence.status;
    var Durm = (Durum == "online" ? ("#8B0000") : (Durum == "offline" ? (0xD97634) : (Durum == "idle" ? (0xD97634) : (Durum == "dnd" ? (0xD97634) : (0xD97634)))))
    var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
  const kullanicibilgim = new Discord.RichEmbed()
  .setAuthor(usr.username, usr.avatarURL)
  .setColor(config.renk)
  .setTimestamp()
  .addField('Ad:', usr.username + '#' + usr.discriminator)
  .addField('ID:', usr.id)
  .addField('Kayıt tarihi:', usr.createdAt)
  .addField('Durum:', durm)
  .addField('Şu an oynadığı oyun:', usr.presence.game ? usr.presence.game.name : 'Şu an oyun oynamıyor')
  .addField('BOT mu?', usr.bot ? '\n Evet' : 'Hayır')
  return message.channel.send(kullanicibilgim);
} 
 }
}