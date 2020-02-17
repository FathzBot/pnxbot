const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "kaçcm",
    category: "eğlence",
    description: "s",
    run: async (bot, message, args) => {
 
        let üye = message.mentions.members.first() ? message.mentions.members.first() : message.author;

        let cm = [];

for(var i=140;i<=195;i++)
        {
            cm.push(i)  
      for(var s=160;s<=180;s++){

    }
        }
        
        let cm1 = cm[Math.floor(Math.random() * cm.length)];
        


        if(üye){
    if(cm1 < 160)return message.channel.send(üye + " Boyun " + cm1 + " Santimetre Cüce olmak güzeldir :slight_smile:")
    if(cm1 > 160 && cm1 < 185)return message.channel.send("Boyun " + cm1 + " Santimetre Orta boylusun en ideali bu ya :smile:");
    if(cm1 > 185)return message.channel.send(üye + " Boyun " + cm1 +" Devedede boy var ama Eşşeğin arkasından gidiyor :rolling_eyes:")
}


}
}