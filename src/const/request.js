import {
	INIT_VALUE,
} from './numbers'

export const REQUEST_BODY = {
		idClient: process.env.REACT_APP_CLIENT_ID,
		accessToken: '',
		paramName: 'device',
		paramValue: process.env.REACT_APP_PARAM_VALUE,
		latitude: INIT_VALUE,
		longitude: INIT_VALUE,
		sourceQuery: INIT_VALUE,
}
