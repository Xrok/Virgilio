console.log('No escaparás de la justicia');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setActivity("TESTING");

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

    		message.channel.send(virgilio_response(insultos.length()));
    	}
    }

    if (message.channel == "damemes" ) {
    	const tipo = message.attachments.array;
    	
    }

});


bot.on('emojiCreate', (emoji)=> {
	emoji.guild.defaultChannel.send('Se ha creado un nuevo emoji');
});

bot.login(process.env.VIRGILIO_KEY)

const insultos [];
insultos[0]="Tu viejaa!!";
insultos[1]="Callate hijo de perra";
insultos[2]="Ya otro dia ok?";
insultos[3]="Anda a que te soplen la nuca";
insultos[4]="Calla chivo";
insultos[5]="Si a ti se te chorrean los pedos";
insultos[6]="Silencio V I R G E N";
insultos[7]="Calla que tu no cachas";
insultos[8]="Sigues siendo un gil de mierda";
insultos[9]="Eres gil y moriras gil csmr";
insultos[10]="Calla mierda";
insultos[11]="Igual wanki es gil csmr, PES ES BASURA";
insultos[12]="Ten un lindo dia bendicion del señor. :)";

function virgilio_response(number) {

	const numero = math.floor(math.random()*number)
	return insultos[numero];
}