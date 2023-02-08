import { REST , Routes } from 'discord.js';
import { commands } from './commands';
import {} from 'dotenv/config';

const TOKEN = process.env.TOKEN;

const rest = new REST({ version: '10' }).setToken(TOKEN);
const CLIENT_ID = process.env.CLIENT_ID;

export default async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};