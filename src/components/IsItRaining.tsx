import { COMPOSITION_CONFIG } from '../config'
import { useTranslations } from '../hooks'
import { Cloud } from './Cloud'
import { VideoBackground } from './VideoBackground'
import { Heading,} from '../components/typography/index'

export const IsItRaining = () => {
	const { VIDEO } = COMPOSITION_CONFIG
	const T = useTranslations()

	return (
		<VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
			<Heading>{T.intro.question}</Heading>
			<Cloud translateX={20} translateY={-20} scale={2} rotate={-10} />
			<Cloud translateX={150} translateY={-20} />
		</VideoBackground>
	)
}
