import { WeatherState } from './../common'
import { useTranslations } from './useTranslations'

export const useWeatherStateName = (weatherState: WeatherState) => {
	const T = useTranslations()

	switch (weatherState) {
		case WeatherState.Rainging:
			return T.weatherState.raining
		case WeatherState.ThunderStrom:
			return T.weatherState.thunderstorm
		case WeatherState.Snowing:
			return T.weatherState.snowing
		case WeatherState.Cloudy:
			return T.weatherState.cloudy
		case WeatherState.Sunny:
			return T.weatherState.sunny
		default:
			return ''
	}
}
