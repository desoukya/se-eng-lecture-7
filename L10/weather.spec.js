const axios = require('axios');
const { getWeather } = require('./weather');
const mockWeatherApiStub = require('./weather.api.stub.json');

jest.mock('axios', () => ({
  get: jest.fn((location) => mockWeatherApiStub),
}));

describe('Test Weather', () => {
  test('Test Expected Response', async () => {
    const results = await getWeather();
    expect(results).toEqual(mockWeatherApiStub);
  });
});