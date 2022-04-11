import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';

import stormGlassWeather3HoursFixtures from '@test/fixtures/stormGlass_weather_3_hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalize forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = -33.792726;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixtures);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
