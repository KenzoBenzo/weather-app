import { gql } from "graphql-request";

export const GET_WEATHER = gql`
	query GET_WEATHER {
		weatherForecast(city: "Kansas City") {
			city {
				name
			}
			tempCAvg
			humidityAvg
			pressureAvg
			list {
				dateText
				weather {
					description
				}
				main {
					maxTempC
					minTempC
				}
				wind {
					speed
				}
				visibility
			}
		}
	}
`;
