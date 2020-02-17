const Discord = require("discord.js");
const config = require("../../config.json")
const fs = require("fs");
let linkEngel = JSON.parse(fs.readFileSync("././json/reklam-koruması.json", "utf8"));


module.exports = {
    name: "reklam-koruması",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {

      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
            .then(m => m.delete(5000));
    }

        const secenekler = args.slice(0).join(' ');
    
        if(secenekler.length < 1) return message.reply("`Eğer açmak istiyorsan pnx reklam-koruması aç.\nEğer kapatmak istiyorsan pnx reklam-koruması kapat.`").then(m => m.delete(10000));
    
      if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply("Aç ya da kapat değişkenleri var")
    
        if (secenekler === "aç" || secenekler === "on") {
        
        message.delete();
            
          
        
            message.channel.send("Reklam Engelleme artık açık.").then(m => m.delete(5000));
        
      if(!linkEngel[message.guild.id]){
            linkEngel[message.guild.id] = {
                linkEngel: "aç"
              };
      };
    
              fs.writeFile("././json/reklam-koruması.json", JSON.stringify(linkEngel), (x) => {
            if (x) console.error(x)
          })
        };
    
        if (secenekler === "kapat" || secenekler === "off") {
      message.channel.send(`Reklam Engelleme Kapalı.`).then(m => m.delete(5000));
        
      if(!linkEngel[message.guild.id]){
            linkEngel[message.guild.id] = {
                linkEngel: "kapat"
              };
      };
    
            fs.writeFile("././json/reklam-koruması.json", JSON.stringify(linkEngel), (x) => {
            if (x) console.error(x)
          })
    
           delete linkEngel[message.guild.id]
           delete linkEngel[message.guild.id].linkEngel
    
            message.channel.send("Başarılı bir şekilde kapatıldı").then(m => m.delete(10000));
        
        };


    }
}