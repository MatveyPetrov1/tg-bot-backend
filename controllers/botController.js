const dotenv = require("dotenv");
const Telegram = require("node-telegram-bot-api");
const { validationResult } = require("express-validator");
const {
  infoText,
  itemsText,
  feedbackText,
  startText,
} = require("../utils/texts.js");

dotenv.config();

const token = process.env.TOKEN;
const chatID = process.env.CHAT_ID;

const bot = new Telegram(token, { polling: true });

const {
  inlineKeyboard,
  commands,
  photoArray,
  inlineKeyboard2,
} = require("../utils/commands.js");

const callbackQuery = () => {
  try {
    return bot.on("callback_query", async (query) => {
      const chatId = query.from.id;
      const data = query.data;

      if (data === "1") {
        await bot.sendMediaGroup(chatId, photoArray);
        return bot.sendMessage(
          chatId,
          feedbackText(query.from.first_name, query.from.last_name),
          inlineKeyboard2
        );
      } else if (data === "2") {
        await bot.sendMessage(chatId, "Секундочку...  🕓");
        return bot.sendVideo(chatId, "./assets/video.mp4", {
          caption: startText(query.from.first_name, query.from.last_name),
          ...inlineKeyboard,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const onSendMessage = () => {
  bot.setMyCommands(commands);

  bot.on("message", async (msg) => {
    try {
      const text = msg.text;
      const chatId = msg.from.id;

      if (text === "/start") {
        await bot.sendMessage(chatId, "Секундочку... 🕓");
        return bot.sendVideo(chatId, "./assets/video.mp4", {
          caption: startText(msg.from.first_name, msg.from.last_name),
          ...inlineKeyboard,
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  callbackQuery();
};

const postBuy = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json(result.array());
    }
    const chatId = chatID;

    await bot.sendMessage(chatId, `---Новый заказ---`);
    await bot.sendMessage(chatId, infoText(req));
    await req.body.items.forEach((obj) =>
      bot.sendMessage(chatId, itemsText(obj))
    );

    return res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { postBuy, onSendMessage };
