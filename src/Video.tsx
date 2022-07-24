import { Composition } from 'remotion'
import { IsItRaining } from './components'
import { VIDEO_CONFIG } from './config'
import React, { useState } from 'react'
import './reset.css'
import { WeatherState } from './common'

export const RemotionVideo: React.FunctionComponent = () => {
	const {
		FPS,
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_ID,
	} = VIDEO_CONFIG

	const [temperature] = useState(20)
	const [weatherState] = useState(WeatherState.Sunny)

	return (
		<Composition
			fps={FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
			id={VIDEO_ID}
			component={IsItRaining}
			durationInFrames={VIDEO_DURATION_IN_FRAMES}
			defaultProps={{
				temperature,
				weatherState,
			}}
		/>
	)
}
