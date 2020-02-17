
const Discord = require('discord.js');
const choices = ['Yazı','Tura']
module.exports = {
    name: "yazı-tura",
    category: "eğlence",
    description: "s",
    run: async (bot, message, args) => {
        let userTurn = false;
        const user = userTurn ? userTurn : message.author;
        let choice;
        if (!user.bot || (user.bot && userTurn)) {
            await message.channel.send("Yazı Mı Tura Mı <a:emoji_7:678723573799714855>");
            const filter = res =>
                res.author.id === user.id && ['yazı','tura'].includes(res.content.toLowerCase());
            const turn = await message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000
            });
            if (!turn.size) {
                await message.channel.send(`Üzgünüm ama, süre doldu!`);
                
            }
            choice = turn.first().content.toLowerCase();
        } else {
            ;
            choice = choices[Math.floor(Math.random() * choices.length)];
        }
        if (choice === 'yazı') {
            if(choices[Math.floor(Math.random() * choices.length)] === "Yazı"){
                message.channel.send("Yazı Çıktı. <:kazandin:679020878272397368> çok iyi tahmin ettin.")
            }else{
                message.channel.send("Tura çıktı. <:kaybettin:679020868977819711> daha Yazı Turada kaybediyorsun ne olacak senin halin.")
            }
        } else if (choice === 'tura') {
            
            if(choices[Math.floor(Math.random() * choices.length)] === "Tura"){
                message.channel.send("Tura Çıktı. <:kazandin:679020878272397368> çok iyi tahmin ettin")
            }else{
                message.channel.send("Yazı çıktı. <:kaybettin:679020868977819711> daha Yazı Turada kaybediyorsun ne olacak senin halin")
            }
    }
  }
}