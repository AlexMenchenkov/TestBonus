import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './app/reducer';

const initStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(rootSaga);
	return store;
}

export default initStore();
