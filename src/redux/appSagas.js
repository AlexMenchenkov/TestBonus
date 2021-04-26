import {call, put} from "redux-saga/effects";
import {saveData} from '../redux/app/actions';

import {getAccessToken, getData} from '../services/api';

export function* sagaGetToken() {
	try {
		const res = yield call(getAccessToken);
		const accessToken = res.data.accessToken;
		const data = yield call(getData, accessToken);
		yield put(saveData(data.data.data));
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(e);
	}
}
