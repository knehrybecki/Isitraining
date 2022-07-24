import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'
import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'

export const ChristmasTree: React.FunctionComponent = () => {
	const frame = useCurrentFrame()
	const animatedSkewX = interpolate(
		frame,
		[0, 45, 90, 120],
		[0, 1.5, 0, -1.5]
	)
  
	return (
		<BaseChristmasTree
			src={Images.ChristmasTree}
			style={{
				transform: `skewX(${animatedSkewX}deg)`,
			}}
		/>
	)
}

const BaseChristmasTree = styled(Img)`
	width: 489px;
	height: 627px;
	transform-origin: bottom center;
`
