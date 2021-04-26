import {ZERO, ONE} from '../const/const'

export const getRequestBody = () => {
	return {
		idClient: process.env.REACT_APP_CLIENT_ID,
		accessToken: '',
		paramName: 'device',
		paramValue: process.env.REACT_APP_PARAM_VALUE,
		latitude: ZERO,
		longitude: ZERO,
		sourceQuery: ZERO,
	};
}

export const getStringDeclination = (countOrigin, forms) => {
	const count = Math.abs(countOrigin) % 100;
	const n1 = count % 10;
	if (count > 10 && count < 20) { return forms[2]; }
	if (n1 > ONE && n1 < 5) { return forms[ONE]; }
	if (n1 === ONE) { return forms[ZERO]; }
	return `${countOrigin} ${forms[2]}`;
}

export const getFormatedDate = (date) => {
	if (!date) {
		return '';
	}
	const twoLastElements = -2;
	const instanceDate = new Date(date);
	const month = (`${ZERO}` + (instanceDate.getUTCMonth() + ONE)).slice(twoLastElements);
	const day = instanceDate.getUTCDate();
	return `${day}.${month}`
}
