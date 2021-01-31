const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '@';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '&community') {
    msg.channel.send('Community C1 Z UL4 jest najlepsze jakie widzialem w zyciu ~ xPlayerr 2k21');
  }else if(msg.content === '&ricardo'){
    msg.channel.send('https://tenor.com/view/ricardo-flick-dance-weekend-vibe-gif-13753340');
   }else if(msg.content === '&stworzeniekonta'){
   msg.channel.send('Wkrótce!');
   }else if(msg.content === '&Wlasciciel'){
   msg.channel.send('Wkrótce!');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   }else if(msg.content === '&help'){
   msg.channel.send('Nie potrzebna ci pomoc heh PAIN');
   
  }
});

client.login('ODA0MjgzMTkwNzAwMTQ2Njk4.YBKFFw.pRFJeBlWsnVidHBGEToFAIlNEJg')