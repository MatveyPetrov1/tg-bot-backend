const commands = [{ command: "/start", description: "Начать работу с ботом" }];

const inlineKeyboardCommands = [
  [
    {
      text: "Cделать заказ  🌯 ☕ 🍰",
      web_app: {
        url: "https://main--wondrous-clafoutis-690641.netlify.app/",
      },
    },
  ],
  [
    {
      text: "Отзывы  😉 🤝 😊",
      callback_data: "1",
    },
  ],
];

const inlineKeyboardCommands2 = [
  [
    {
      text: "Назад  👈",
      callback_data: "2",
    },
    {
      text: `Наш "2ГИС"  🗺️`,
      web_app: {
        url: "https://2gis.ru/bratsk/firm/70000001079167874/tab/reviews",
      },
    },
  ],
];

const inlineKeyboard = {
  reply_markup: {
    inline_keyboard: inlineKeyboardCommands,
  },
};

const inlineKeyboard2 = {
  reply_markup: {
    inline_keyboard: inlineKeyboardCommands2,
  },
};

const photoArray = [
  {
    type: "photo",
    media: "assets/1.jpg",
  },
  {
    type: "photo",
    media: "assets/2.jpg",
  },
  {
    type: "photo",
    media: "assets/3.jpg",
  },
  {
    type: "photo",
    media: "assets/4.jpg",
  },
  {
    type: "photo",
    media: "assets/5.jpg",
  },
];

module.exports = { commands, inlineKeyboard, inlineKeyboard2, photoArray };
