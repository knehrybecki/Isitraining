import styled from 'styled-components'
import { WeatherState } from '../common'
import { Img } from 'remotion'
import { Images } from '../assets'

type WeatherBaseImageProps = {
	weatherState: WeatherState
}

export const WeatherBaseImage: React.FunctionComponent<WeatherBaseImageProps> = ({
	weatherState,
}) => {
	switch (weatherState) {
		case WeatherState.Rainging:
    case WeatherState.ThunderStrom:
      return <Umbrella src={Images.Umbrella} />
    case WeatherState.Snowing:
      return <ChristmasTree src={Images.ChristmasTree} />
    case WeatherState.Cloudy:
    case WeatherState.Sunny:
      return <SunBeds src={Images.SunBeds} />
		default:
			return null
	}
}

const Umbrella = styled(Img)`
	width: 655px;
	height: 496px;
`

const ChristmasTree = styled(Img)`
  width: 489px;
  height: 627px;
`

const SunBeds = styled(Img)`
  width: 814px;
  height: 465px;
`
