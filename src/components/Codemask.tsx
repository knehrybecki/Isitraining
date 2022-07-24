import React from 'react'
import { useCurrentFrame, spring, useVideoConfig } from 'remotion'
import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'

export const CodeMask: React.FunctionComponent = () => {
	const frame = useCurrentFrame()
	const { fps } = useVideoConfig()
	const animatedScale = spring({
		frame: frame - 15,
		fps,
		from: 2,
		to: 1,
	})

	return (
		<BaseCodemask
			src={Images.Codemask}
			style={{
				transform: `scale(${animatedScale})`,
			}}
		/>
	)
}

const BaseCodemask = styled(Img)`
	width: 324px;
	height: 251px;
`
