const api = require('axios');

async function getWeather() {
  const results = await api.get(`https://goweather.herokuapp.com/weather/cairo`);
  console.log('results :>> ', results);
  return results;
}

module.exports = {
  getWeather
};