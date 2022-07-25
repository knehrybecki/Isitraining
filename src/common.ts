export enum WeatherState {
	Raining = 0,
	ThunderStrom = 1,
	Snowing = 2,
	Cloudy = 3,
	Sunny = 4,
}

type WeatherCondition = {
	id: number
	main: string
	description: string
	icon: string
}

export type OpenWeatherResponse = {
	coord: {
		lon: number
		lat: number
	}
	weather: Array<WeatherCondition>
	base: string

	main: {
		temp: number
		pressure: number
		humidity: number
		temp_min: number
		temp_max: number
		feels_like: number
	}
	visibility: number
	wind: {
		speed: number
		deg: number
	}
	clouds: {
		all: number
	}
	dt: number
	sys: {
		type: number
		id: number
		message: number
		country: string
		sunrise: number
		sunset: number
	}
	timezone: number
	id: number
	name: string
	cod: number
}

export type WeatherModel = {
	temperature: number
	weatherState: WeatherState
}
