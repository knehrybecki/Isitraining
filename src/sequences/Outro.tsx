import styled from 'styled-components'
import { Typography, VideoBackground } from '../components'
import { APP_CONFIG, COMPOSITION_CONFIG } from '../config'
import { Images } from '../assets'
import { useTranslations } from '../hooks'
import { Img } from 'remotion'

export const Outro: React.FunctionComponent = () => {
	const { VIDEO } = COMPOSITION_CONFIG
	const { DISCORD_URL } = APP_CONFIG
	const T = useTranslations()

	return (
		<VideoBackground backgroundColor={VIDEO.OUTRO_BACKGROUND_COLOR}>
			<Border>
				<Container>
					<Codemask src={Images.Codemask} />
					<Section>
						<Typography.Regular>
							{T.outro.question}
						</Typography.Regular>
						<DiscordContainer>
							<Discord src={Images.Discord} />
						</DiscordContainer>
						<Typography.Regular>
							{T.outro.discord}
						</Typography.Regular>
						<Typography.Regular>{DISCORD_URL}</Typography.Regular>
					</Section>
					<Typography.Note>{T.outro.note}</Typography.Note>
				</Container>
			</Border>
		</VideoBackground>
	)
}

const Border = styled.div`
	position: absolute;
	border: 9px solid white;
	top: 70px;
	bottom: 70px;
	left: 70px;
	right: 70px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`
const Codemask = styled(Img)`
	width: 324px;
	height: 251px;
`

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`

const Discord = styled(Img)`
	width: 133px;
	height: 101px;
`
const Container = styled.div`
	max-width: 630px;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin-top: 200px;
	margin-bottom: 200px;
	text-align: center;
`
const DiscordContainer = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
`