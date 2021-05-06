import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

export function useMemoDispatch() {
	const dispatch = useDispatch();
	return useCallback((action, payload = null) => {
		dispatch(action(payload));
	}, [dispatch]);
}
