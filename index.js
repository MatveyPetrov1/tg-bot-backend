const express = require("express");
const cors = require("cors");
const { onSendMessage, postBuy } = require("./controllers/botController.js");
const buyValidation = require("./validations/index.js");

const app = express();
app.use(cors());
app.use(express.json());

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
