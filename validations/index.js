const { body } = require("express-validator");

const buyValidation = [
  body("number", "Неверный формат телефона").isString().isLength(11),
];

module.exports = buyValidation;
