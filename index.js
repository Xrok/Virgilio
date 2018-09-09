console.log('No escaparás de la justicia');
const Discord = require('discord.js');
const bot = new Discord.Client();

var insultos =	[0];
insultos.push("Tu viejaa!!");
insultos.push("Callate hijo de perra");
insultos.push("Ya otro dia ok?");
insultos.push("Anda a que te soplen la nuca");
insultos.push("Calla chivo");
insultos.push("Si a ti se te chorrean los pedos no me hables pls");
insultos.push("Silencio V I R G E N");
insultos.push("Calla que tu no cachas");
insultos.push("Sigues siendo un gil de mierda");
insultos.push("Eres gil y moriras gil csmr");
insultos.push("Calla mierda");
insultos.push("Igual wanki es gil csmr, PES ES BASURA");
insultos.push("Ten un lindo dia bendicion del señor. :)");

bot.on("ready", () => {
<<<<<<< HEAD
    bot.user.setActivity("TESTING");

=======
    bot.user.setActivity("HO YARA");
>>>>>>> 5a2af0968dd2f8bfbcc9398a8dd0d4e75608f9b6

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

    		message.channel.send(virgilio_response(insultos.length));
    	}
    }

    if (words[0] == "!virgilio8"){
    	if(Math.floor(Math.random()*10+1) <=5){
    		message.channel.send("Si mi papi mi rey");
    	}else{
    		message.channel.send("Nola, mejor ve a que te toque tu tío");
    	}
    }

    if (message.channel == "damemes" ) {
    	const tipo = message.attachments.array;
    	
    }

});


bot.on('emojiCreate', (emoji)=> {
	emoji.guild.defaultChannel.send('Se ha creado un nuevo emoji');
});

<<<<<<< HEAD
bot.login(process.env.VIRGILIO_KEY)//VIRGILIO_KEY


function virgilio_response(number) {
	
	const numero = Math.floor(Math.random()*number)
	return insultos[numero];
}
=======
bot.login(process.env.VIRGILIO_KEY);
>>>>>>> 5a2af0968dd2f8bfbcc9398a8dd0d4e75608f9b6
