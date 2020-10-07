const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "sarıl",
    category: "animeler",
    description: "s",
    run: async (bot, message, args) => {
 
 let gifs = ["https://i.imgur.com/GuADSLm.gif",
"https://i.imgur.com/XEs1SWQ.gif",
"https://i.imgur.com/gSGeZJF.gif    ",
"https://i.imgur.com/FCXa6Gx.gif",
"https://i.imgur.com/EatYxy1.gif",
"https://i.imgur.com/VgP2ONn.gif",
"https://i.imgur.com/snm8S1B.gif",
"https://i.imgur.com/IoSM9JM.gif",
"https://i.imgur.com/XfFacw5.gif",
"https://i.imgur.com/34Ldmbz.gif",
"https://i.imgur.com/bL9iuEI.gif",
"https://i.imgur.com/RPYNm9o.gif",
"https://i.imgur.com/hgXcoiU.gif",
"https://i.imgur.com/hA9ZNoR.gif",
"https://i.imgur.com/LwF6XOc.gif",
"https://i.imgur.com/iKPs2AJ.gif",
"https://i.imgur.com/t8Ghkkm.gif",
"https://i.imgur.com/TYkINci.gif",
"https://i.imgur.com/rkNqnfy.gif",
"https://i.imgur.com/kNHDZBI.gif",
"https://i.imgur.com/14FwOef.gif",
"https://i.imgur.com/BCCXWb2.gif",
]
 

let üye = message.mentions.members.first() ? message.mentions.members.first() : "Boşluk";
if(üye){
let s = new RichEmbed()
.setDescription(üye + "," + message.author + " Sana sarıldı yiaaa")
.setImage(gifs[Math.floor(Math.random() * gifs.length)])
.setColor(config.renk)
message.channel.send(s);
}

    }
}
