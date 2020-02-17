const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "dürt",
    category: "animeler",
    description: "s",
    run: async (bot, message, args) => {
    
let gifs = ["https://i.imgur.com/N7g7caI.gif",
"https://i.imgur.com/It4Mk9z.gif    ",
"https://i.imgur.com/KCAdA7c.gif",
"https://i.imgur.com/H7Ok5tn.gif",
"https://i.imgur.com/xSvkpIh.gif",
"https://i.imgur.com/Z4ZeNT1.gif",
"https://i.imgur.com/Ym7K7sn.gif",
"https://i.imgur.com/RdYoGmA.gif",
"https://i.imgur.com/hjMRxyZ.gif",
"https://i.imgur.com/wa2dUw4.gif",
"https://i.imgur.com/1fQITL7.gif",
"https://i.imgur.com/yOEOe9J.gif",

]



let üye = message.mentions.members.first() ? message.mentions.members.first() : "Boşluk";
if(üye){
let s = new RichEmbed()
.setDescription(üye + "," + message.author + " Seni dürttüü")
.setImage(gifs[Math.floor(Math.random() * gifs.length)])
.setColor(config.renk)
message.channel.send(s);
}


    }
}