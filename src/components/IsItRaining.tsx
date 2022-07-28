import { Audio, Sequence, useVideoConfig } from 'remotion'
import { WeatherState } from '../common'
import { Intro, Outro, Result } from '../sequences'

import source from '../assets/music.mp3'

type isItRainingProps = {
	weatherState: WeatherState
	temperature: number
}

export const IsItRaining: React.FunctionComponent<
	isItRainingProps
> = ({ weatherState, temperature }) => {
	const { fps } = useVideoConfig()

	return (
		<>
			<Sequence
				from={0}
				durationInFrames={3 * fps}
				name='Intro'>
				<Intro />
			</Sequence>
			<Sequence
				from={3 * fps}
				durationInFrames={4 * fps}
				name='Result'>
				<Result
					temperature={temperature}
					weatherState={weatherState}
				/>
			</Sequence>
			<Sequence
				from={7 * fps}
				durationInFrames={3 * fps}
				name='Outro'>
				<Outro />
			</Sequence>
			<Audio src={source} />
		</>
	)
}
