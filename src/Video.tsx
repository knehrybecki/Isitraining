import { Composition } from 'remotion'
import { IsItRaining } from './components'
import { VIDEO_CONFIG } from './config'
import React from 'react'

export const RemotionVideo: React.FunctionComponent = () => {
	const {
		FPS,
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_ID,
	} = VIDEO_CONFIG

	return (
		<Composition
			fps={FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
			id={VIDEO_ID}
			component={IsItRaining}
			durationInFrames={VIDEO_DURATION_IN_FRAMES}
		/>
	)
}
