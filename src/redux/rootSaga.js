import {ActionTypes} from './app/actions';
import {sagaGetToken} from './appSagas';
import { takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
	yield takeEvery(ActionTypes.GET_ACCESS_TOKEN, sagaGetToken);
}
