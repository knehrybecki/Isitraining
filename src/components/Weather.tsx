import { Snow } from './Snow'
import { SnowCloud } from './SnowCloud'
import { RainCloud } from './RainCloud'
import { Cloud } from './Cloud'
import { SunBehindTheCloud } from './SunBehindTheCloud'
import { WeatherState } from '../common'
import React from 'react'
import { Sun } from './Sun'

type WeatherProps = {
	weatherState: WeatherState
}

export const Weather: React.FunctionComponent<WeatherProps> = ({
	weatherState,
}) => {
	const cloudPosition = [
		{
			rotate: 15,
			scale: 0.6,
			translateX: 500,
			translateY: -940,
		},
		{
			rotate: -15,
			scale: 0.6,
			translateX: -430,
			translateY: -980,
		},
		{
			scale: 0.8,
			translateX: -530,
			translateY: -380,
		},
		{
			scale: 0.7,
			translateX: -580,
			translateY: 500,
		},
		{
			scale: 0.7,
			translateX: 560,
			translateY: 300,
		},
	]

	switch (weatherState) {
		case WeatherState.Raining:
		case WeatherState.ThunderStrom:
			return (
				<>
					<RainCloud
						translateX={0}
						translateY={-600}
						withThunder={
							weatherState ===
							WeatherState.ThunderStrom
						}
					/>
					{cloudPosition.map(
						(position, index) => (
							<RainCloud
								key={index}
								{...position}
							/>
						)
					)}
				</>
			)
		case WeatherState.Snowing:
			return (
				<>
					<SnowCloud
						translateX={0}
						translateY={-600}
					/>
					{cloudPosition.map(
						(position, index) => (
							<SnowCloud
								key={index}
								{...position}
							/>
						)
					)}
				</>
			)

    case WeatherState.Cloudy:
      return (
				<>
					<SunBehindTheCloud
						translateX={0}
						translateY={-600}
					/>
					{cloudPosition.map(
						(position, index) => (
							<Cloud
								key={index}
								{...position}
							/>
						)
					)}
				</>
			)
    case WeatherState.Sunny:
      return (
				<>
					<Sun
						translateX={0}
						translateY={-600}
					/>
					{cloudPosition.map(
						(position, index) => (
							<Cloud
								key={index}
								{...position}
							/>
						)
					)}
				</>
			)
		default:
			return null
	}
}

// <Sun translateX={0} translateY={-600} />
