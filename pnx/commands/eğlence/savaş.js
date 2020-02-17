const Discord = require("discord.js");
const config = require("../../config.json")
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../../util/Util');

const fighting = new Set();

module.exports = {
    name: "savaş",
    category: "eğlence",
    description: "s",
    run: async (bot, message, args) => {
    let user = message.mentions.members.first(); 
        if(!user)return message.channel.send("Önce bir üye etiketlemelisin")
        if (user.id === message.author.id) return message.reply('Kendin ile düello atamazsın.');
		if (fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir düello meydana gelebilir.');
	fighting.add(message.channel.id);
        try {
            if (!user.bot) {
                await message.channel.send(`${user}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
                const verification = await verify(message.channel, user);
				if (!verification) {
					fighting.delete(message.channel.id);
					return message.channel.send(`Düello kabul edilmedi...`);
            }
        }
        let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
            };
            while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : user;
				let choice;
				if (!user.bot || (user.bot && userTurn)) {
					await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? **saldır**, **korun**, **efsane**, veya **pes et**?
						**${message.author.username}**: ${userHP}HP
						**${user.username}**: ${oppoHP}HP
					`);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'korun', 'efsane', 'pes et'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.channel.send(`Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'korun', 'efsane'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'korun') {
					await message.channel.send(`${user}, korundu!`);
					guard = true;
					reset(false);
				} else if (choice === 'efsane') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						await message.channel.send(`${user}, Woww! **${damage}** hasar vurdu!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`${user}, Off! Şanssızlık! Atak yapamadın!`);
					}
					reset();
				} else if (choice === 'pes et') {
					await message.channel.send(`${user}, pes etti! Seni korkak!`);
					forfeit();
					break;
				} else {
					await message.channel.send('Ne yapmak istediğini anlamadım.');
				}
			}
		    fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : user;
			return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP}HP \n**${user.username}**: ${oppoHP}HP`);
		
        }catch{
            fighting.delete(message.channel.id);
			throw err;
        }
        
    }
}