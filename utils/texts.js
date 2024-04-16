const startText = (first_name, last_name) => {
  return `Приветствую вас, уважаемый(-ая) ${first_name} ${
    last_name ? last_name : ""
  }! 😋👋
Я умный бот "Toj Coffee" и очень рад видеть Вас тут! 😍

Здесь Вы можете сделать свой заказ для самовывоза в 
"Toj Coffee" к удобному для Вас времени или узнать о нас больше! 💚

Все просто! Для дальнейшей работы снизу нажмите на интересующую Вас услугу! 👇

Может, перекусим? 😁 💕 ☕`;
};

const infoText = (req) => {
  return `${req.body.name ? "Имя: " + req.body.name : ""}
Телефон: ${req.body.number}
Время: ${req.body.time}
Адрес: ${req.body.street}
${req.body.comment ? "Комментарий: " + req.body.comment : ""}`;
};

const itemsText = (obj) => {
  return `${obj.title} ${obj.sizeValue} ${obj.count}шт. 
 ${obj.sugarCount > 0 ? "Сахар: " + obj.sugarCount : ""} 
 ${obj.siropArray.length > 0 ? "Сиропы: " + obj.siropArray : ""}`;
};

const feedbackText = (name, last_name) => {
  return `Нужно ли тут что-то говорить, ${name} ${last_name ? last_name : ""}? 

Наши довольные клиенты скажут все за нас! 🤝 

Прекрасные отзывы, оценка 5.0 🥇 при 80+ отзывах в "2ГИС" это наша гордость! 🔥

Мы ценим каждого покупателя, и от нас никто не уйдет недовольным! 🥰`;
};

module.exports = { startText, infoText, itemsText, feedbackText };
