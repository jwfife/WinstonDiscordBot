require('dotenv').config(); //has access to .env file
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ //bot instance
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages, //takes messages
        IntentsBitField.Flags.MessageContent, //reads messages
    ]
});

/*.on has access to list of events (event handler)
- c is our bot
c.user = bot username
.tag is discord tag*/
client.on('ready', (c) => {
    console.log(`${c.user.tag}`);
});

/*
Creates a message/replies based on message sent in discord
*/
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    switch(message.content.toLowerCase()) {
        case "!winston":
            randomQuote(message);
            break;
        case "!winton":
            randomQuote(message);
            break;
        case "!monkey":
            message.reply("I'm not a monkey... I'm a scientist.");
            break;
        case "!peanut butter":
           message.reply("Did somebody say *peanut butter*?");
           break;
        case "!commands":
            message.reply("To get my attention, use any of these 3 commands! (case insensitive) !winston, !winton, !monkey");
            break;
        default:
          // code block
      }
});

randomQuote = (message) => {
    const quotes = ["Hi there!", "Salutations.", "No, I do not want a banana.", "Did somebody say *peanut butter*?", 
    "No monkey business.", "How embarrassing!", "Get a load of this!", "Greetings!", "That was bananas!", 
    "A gorilla never forgets. Like elephants!", "Coming through!", "Winston reporting.",
    "Did you miss me? Because I missed you!", "Excuse me for dropping in.", "Did someone call?"];
    const quoteIndex = Math.floor(Math.random() * 16);
    message.reply(quotes[quoteIndex]);
  }

client.login(process.env.TOKEN); //bot's password (keep safe, can reset token)

