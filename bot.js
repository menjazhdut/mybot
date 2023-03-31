
javascript
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = '6008668981:AAE-GMnCqmITBohOVJ2o3AN8hzYjvPqnjTA'; // здесь нужно указать токен вашего бота
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/quote') {
    try {
      const response = await axios.get('https://api.kanye.rest/');
      const quote = response.data.quote;
      bot.sendMessage(chatId, quote);
    } catch (error) {
      console.log(error);
      bot.sendMessage(chatId, 'Произошла ошибка при получении цитаты :(');
    }
  }
});
