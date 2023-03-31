javascript
const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота, полученный у BotFather
const token = '6008668981:AAE-GMnCqmITBohOVJ2o3AN8hzYjvPqnjTA';

const bot = new TelegramBot(token, {polling: true});

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Привет! Я Telegram-бот.');
});
