import { Composition, continueRender, delayRender } from 'remotion'
import { IsItRaining } from './components'
import { APP_CONFIG, VIDEO_CONFIG } from './config'
import React, { useEffect, useState } from 'react'
import './reset.css'
import { WeatherState } from './common'
import { fetchWeatherDataForCity } from './actions'

export const RemotionVideo: React.FunctionComponent = () => {
	const {
		FPS,
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_ID,
	} = VIDEO_CONFIG
	const { CITY } = APP_CONFIG
	const [handle] = useState(() => delayRender())
	const [isReadyToRender, setIsReadyToRender] = useState(false)
	const [temperature, setTemperature] = useState<number>()
	const [weatherState, setWeatherState] = useState<WeatherState>()
	const fetchWeatherData = async () => {
		const { temperature, weatherState } =
			await fetchWeatherDataForCity(CITY)

		setTemperature(temperature)
		setWeatherState(weatherState)
		setIsReadyToRender(true)
		continueRender(handle)
	}

	useEffect(() => {
		fetchWeatherData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return isReadyToRender ? (
		<Composition
			fps={FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
			id={VIDEO_ID}
			component={IsItRaining}
			durationInFrames={VIDEO_DURATION_IN_FRAMES}
			defaultProps={{
				temperature: temperature as number,
				weatherState: weatherState as WeatherState,
			}}
		/>
	) : null
}
