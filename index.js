console.log('No escaparás de la justicia');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setActivity("HO YARA");

});

bot.on('message', (message) => {
	const words = message.content.toLowerCase().split(" ");
	const wordsNum = words.length;
	if (message.content.toLowerCase() == 'hola'){
			console.log('hola');	
			message.channel.send('Hola! prro ');
	}
//-----------------------------------------------TATSU----------------------------------------------------//
	if (message.author.username == 'Tatsu_20' ){
		if (wordsNum>5){
			message.channel.send('Caalla mierda');
		}
	}
//-------------------------------------------------/--------------------------------------------------------//
	for (i = 0; i < wordsNum; i++) { 
    	if (words[i]=="virgilio") {
    		message.channel.send('Tu Viejaa!');
    	}
    }

    if (message.channel == "damemes" ) {
    	const tipo = message.attachments.array;
    	
    }

});


bot.on('emojiCreate', (emoji)=> {
	emoji.guild.defaultChannel.send('Se ha creado un nuevo emoji');
});

bot.login(process.env.VIRGILIO_KEY);
