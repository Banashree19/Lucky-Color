const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = " #ff9999";
      break;
    case "tarus":
      body.style.backgroundColor = " #b3ffb3";
      break;
    case "gemini":
      body.style.backgroundColor = "#cc66ff ";
      break;
    case "cancer":
      body.style.backgroundColor = "#ffff00";
      break;
    case "leo":
      body.style.backgroundColor = "#3399ff";
      break;
    case "virgo":
      body.style.backgroundColor = " #e69900";
      break;
    case "libra":
      body.style.backgroundColor = " #00ff00";
      break;
    case "scorpio":
      body.style.backgroundColor = "#0099cc";
      break;
    case "sagittarius":
      body.style.backgroundColor = "#00ff99";
      break;
    case "aquarius":
      body.style.backgroundColor = " #ffeecc";
      break;
    case "capricorn":
      body.style.backgroundColor = "#00ccff";
      break;
    case "pisces":
      body.style.backgroundColor = "#ffcc66 ";
      break;

    default:
      body.style.backgroundColor = "#fff";
      break;
  }
};
