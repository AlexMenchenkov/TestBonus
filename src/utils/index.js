import {
	initValue,
	FIRST_ITEM,
	THIRD_ITEM,
	DIVIDER_TEN,
	DIVIDER_HUNDRED,
	BOTTOM_BOUND,
	UPPER_BOUND,
	TWO_LAST_ELEMENTS,
	REMAINDER_VALUE_MAX,
	SECOND_ITEM,
	REMAINDER_VALUE_MIN,
} from '../const/numbers'

export const getRequestBody = () => {
	return {
		idClient: process.env.REACT_APP_CLIENT_ID,
		accessToken: '',
		paramName: 'device',
		paramValue: process.env.REACT_APP_PARAM_VALUE,
		latitude: initValue,
		longitude: initValue,
		sourceQuery: initValue,
	};
}

export const getStringDeclination = (countOrigin, forms) => {
	const count = Math.abs(countOrigin) % DIVIDER_HUNDRED;
	const remainder = count % DIVIDER_TEN;
	if (count > UPPER_BOUND && count < BOTTOM_BOUND) { return forms[THIRD_ITEM]; }
	if (remainder > REMAINDER_VALUE_MIN && remainder < REMAINDER_VALUE_MAX) { return forms[SECOND_ITEM]; }
	if (remainder === REMAINDER_VALUE_MIN) { return forms[FIRST_ITEM]; }
	return `${countOrigin} ${forms[THIRD_ITEM]}`;
}

export const getFormatedDate = (date) => {
	if (!date) {
		return '';
	}
	const instanceDate = new Date(date);
	const month = (`${FIRST_ITEM}` + (instanceDate.getUTCMonth() + FIRST_ITEM)).slice(TWO_LAST_ELEMENTS);
	const day = instanceDate.getUTCDate();
	return `${day}.${month}`
}
