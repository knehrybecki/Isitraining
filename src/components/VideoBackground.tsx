import styled from 'styled-components'

type VideoBackgroundProps = {
	children: React.ReactNode
	backgroundColor: string
}

export const VideoBackground = styled.div<VideoBackgroundProps>`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.backgroundColor};
`
