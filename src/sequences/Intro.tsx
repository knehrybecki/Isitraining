import { Cloud, VideoBackground, VideoTitleBox } from '../components'
import { COMPOSITION_CONFIG } from '../config'

export const Intro: React.FunctionComponent = () => {
	const { VIDEO } = COMPOSITION_CONFIG

	return (
		<VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
			<VideoTitleBox />
			<Cloud 
				scale={0.8}
				translateX={-330}
				translateY={-700}
			/>
			<Cloud 
				scale={1.3}
				translateX={350}
				translateY={-960}
			/>
			<Cloud 
				scale={0.45}
				translateX={50}
				translateY={-660}
			/>
			<Cloud 
				scale={0.7}
				rotate={160}
				translateX={460}
				translateY={-560}
			/>
			<Cloud 
				scale={0.45}
				translateX={-350}
				translateY={-120}
			/>
			<Cloud 
				scale={0.7}
				translateX={570}
				translateY={20}
			/>
			<Cloud 
				scale={1.4}
				rotate={-10}
				translateX={-520}
				translateY={240}
			/>
			<Cloud 
				scale={1.3}
				translateX={420}
				translateY={680}
			/>
			<Cloud 
				scale={0.45}
				translateX={-120}
				translateY={540}
			/>
			<Cloud 
				scale={1.3}
				translateX={-320}
				translateY={880}
			/>
		</VideoBackground>
	)
}
