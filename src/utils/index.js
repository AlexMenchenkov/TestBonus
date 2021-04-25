import {idClient, paramValue, ZERO, ONE} from '../const/const'

export const getRequestBody = () => {
	return {
		idClient,
		accessToken: '',
		paramName: 'device',
		paramValue,
		latitude: ZERO,
		longitude: ZERO,
		sourceQuery: ZERO,
	};
}

export const getStringDeclination = (countOrigin, forms) => {
	const count = Math.abs(countOrigin) % 100;// eslint-disable-line no-magic-numbers
	const n1 = count % 10;// eslint-disable-line no-magic-numbers
	if (count > 10 && count < 20) { return forms[2]; }// eslint-disable-line no-magic-numbers
	if (n1 > ONE && n1 < 5) { return forms[ONE]; }// eslint-disable-line no-magic-numbers
	if (n1 === ONE) { return forms[ZERO]; }
	return `${countOrigin} ${forms[2]}`;// eslint-disable-line no-magic-numbers
}

export const getFormatedDate = (date) => {
	if (!date) {
		return '';
	}
	const instanceDate = new Date(date);
	const month = (`${ZERO}` + (instanceDate.getUTCMonth() + ONE)).slice(-2);// eslint-disable-line no-magic-numbers
	const day = instanceDate.getUTCDate();
	return `${day}.${month}`
}
