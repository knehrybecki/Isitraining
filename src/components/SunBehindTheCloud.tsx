import styled from 'styled-components'
import { Cloud } from './Cloud'
import { Sun } from './Sun'

type SunBehindTheCloudProps = {
	translateX: number
	translateY: number
}

export const SunBehindTheCloud: React.FunctionComponent<
	SunBehindTheCloudProps
> = ({ translateX, translateY }) => {
	return (
		<Cloud translateX={translateX} translateY={translateY}>
			<PositionedSun scale={0.8} />
		</Cloud>
	)
}

const PositionedSun = styled(Sun)`
	right: -90px;
	z-index: -1;
	bottom: 0px;
`
