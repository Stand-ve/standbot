import { Client , GatewayIntentBits } from 'discord.js';
import {} from 'dotenv/config';

const TOKEN = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

client.on('interactionCreate', async interaction => {
  const { isChatInputCommand , commandName , reply } = interaction;
  if (!isChatInputCommand()) return;

  if (commandName === 'ping') await reply('Pong!');
});

client.login(TOKEN);
