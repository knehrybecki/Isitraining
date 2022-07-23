import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'
import styled from 'styled-components'
import { Img } from 'remotion'
import { Images } from '../assets'

type SunProps = {
	scale?: number
	className?: string
	translateX?: number
	translateY?: number
}

export const Sun: React.FunctionComponent<SunProps> = ({
	scale = 1,
	className,
	translateX = 0,
	translateY = 0,
}) => {
	const frame = useCurrentFrame()
	const animatedRotate = interpolate(frame, [0, 120], [0, 45])

	return (
		<Container
			className={className}
			style={{
				transform: `translate(${translateX}px, ${translateY}px)`,
			}}>
			<BaseSun
				src={Images.Sun}
				style={{
					transform: `scale(${scale}) rotate(${animatedRotate}deg)`,
				}}
			/>
		</Container>
	)
}

const BaseSun = styled(Img)`
	width: 374px;
	height: 374px;
`
const Container = styled.div`
	position: absolute;
`
