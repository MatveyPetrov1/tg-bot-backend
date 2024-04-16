const express = require("express");
const cors = require("cors");
const { onSendMessage, postBuy } = require("./controllers/botController.js");
const buyValidation = require("./validations/index.js");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 4444 || process.env.PORT;

const startBot = () => {
  try {
    onSendMessage();
  } catch (err) {
    console.log(err);
  }
};

startBot();

app.post("/buy", buyValidation, postBuy);

app.listen(PORT, () => {
  "server is WORKING";
});
