import {
	OpenWeatherResponse,
	WeatherState,
	WeatherModel,
} from './common'
export const toWeatherModel = (
	data: OpenWeatherResponse
): WeatherModel => {
  const [WeatherCondition] = data.weather

	return {
		temperature: Math.floor(data.main.temp),
		weatherState: fromWeatherConditionCode(WeatherCondition.id),
	}
}

const fromWeatherConditionCode = (id: number): WeatherState => {
	if (id >= 200 && id <= 232) {
		return WeatherState.ThunderStrom
	}
  if (id >= 300 && id <= 321 || id >= 500 && id <= 531) {
    return WeatherState.Raining
  }
  if (id >= 600 && id <= 622) {
    return WeatherState.Snowing
  }
  if (id >= 700 && id <= 781 || id >= 801 && id <= 804) {
    return WeatherState.Cloudy
  }
  return WeatherState.Sunny
}