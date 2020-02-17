const Discord = require("discord.js");
const config = require("../../config.json")
const fs = require("fs");

module.exports = {
    name: "sayaç-ayarla",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {


        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
                .then(m => m.delete(5000));
        }
    
const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
const sayackanal = message.mentions.channels.first()


      
if(!args[0]) {
  message.channel.send('**  Ayarlamak istediğin sayı girmelisin. ``pnx sayaç 100 #sayaç``**')
  return
}

if(!sayackanal) {
  message.channel.send('**   Ayarlamak istediğin kanalı girmelisin. ``pnx sayaç 100 #sayaç``**')
}


if(args[0] === "kapat") {
  if(!sayacsayi) {
    message.channel.send(`**  Ayarlanmayan şeyi sıfırlayamazsın.**`)
    return
  }
  
  db.delete(`sayac_${message.guild.id}`)
  db.delete(`sayacK_${message.guild.id}`)
  message.channel.send(`**   Sayaç başarıyla sıfırlandı.\n | Tekrar açmak için: \`pnx sayaç <HedefSayı> <#YazıKanalı>\`**`)
  return
}

if(isNaN(args[0])) {
  message.channel.send(`**  Örnek kullanım: \`pnx sayaç <HedefSayı> <#YazıKanalı>\``)
  return
}

      if(args[0] <= message.guild.members.size) {
              message.channel.send(`**  Sunucudaki kullanıcı sayısından yani (${message.guild.members.size}) sayısından daha yüksek bir değer girmelisin.**`)
              return
      }

db.set(`sayac_${message.guild.id}`, args[0])
db.set(`sayacK_${message.guild.id}`, sayackanal.name)

message.channel.send(`**  Sayaç \`${args[0]}\` olarak ayarlandı!\n | Sayaç kanalı ${sayackanal} olarak ayarlandı.\n | Sayaç komudunu kapatmak için \`pnx sayaç kapat\` yazınız!**`)

    }
}