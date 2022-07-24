import { WeatherState } from '../common'
import { Umbrella } from './Umbrella'
import { ChristmasTree } from './ChristmasTree'
import { SunBeds } from './SunBeds'

type WeatherBaseImageProps = {
	weatherState: WeatherState
}

export const WeatherBaseImage: React.FunctionComponent<
	WeatherBaseImageProps
> = ({ weatherState }) => {
	switch (weatherState) {
		case WeatherState.Raining:
		case WeatherState.ThunderStrom:
			return <Umbrella />
		case WeatherState.Snowing:
			return <ChristmasTree />
		case WeatherState.Cloudy:
		case WeatherState.Sunny:
			return <SunBeds />
		default:
			return null
	}
}
