import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'
import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'

export const SunBeds: React.FunctionComponent = () => {
	const frame = useCurrentFrame()
	const animatedSkewX = interpolate(
		frame,
		[0, 45, 90, 120],
		[0, 1.5, 0, -1.5]
	)

	return (
		<BaseSunBeds
			src={Images.SunBeds}
			style={{
				transform: `skewX(${animatedSkewX}deg)`,
			}}
		/>
	)
}

const BaseSunBeds = styled(Img)`
	width: 814px;
	height: 465px;
	transform-origin: bottom center;
`
