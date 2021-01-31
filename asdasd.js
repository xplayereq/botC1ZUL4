const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '@';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (message.author.bot) return;
	if (message.content.startwith(PREFIX)) {
	const [CMD_NAME, ...args] = message.content
	.trim()
	.substring(PREFIX.length)
	.split(/\s+/);
	console.log(CMD_NAME);
	console.log(args);
	if (CMD_NAME === 'kick') {
		if (!message.member.hasPermission('kick_members')) 
			return message.reply('Nie masz permisji, lol');
		if (args.length === 0) 
			return message.reply('Byqu, podaj jego id!')
		const member = message.guild.members.cache.get(args[0]);
		if (member) {
			member
				.kick()
				.then((member) => message.channel.send('${member} dostał kicka!'))
				.catch((err) => message.channel.send('Nie mam permisji.'));
		}	else 
			message.channel.send('Użytkownik nie został znaleziony!');
	}
}};

client.login('ODA0MjgzMTkwNzAwMTQ2Njk4.YBKFFw.pRFJeBlWsnVidHBGEToFAIlNEJg')