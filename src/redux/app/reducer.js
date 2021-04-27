import {initValue} from '../../const/numbers';
import {ActionTypes} from './actions';

const initialStore = {
	combustionBonusesCount: initValue,
	combustionDate: '',
	currentBonuses: initValue,
	isDataLoaded: false,
};

export default function reducer(state = initialStore, action) {
	switch (action.type) {
		case ActionTypes.SAVE_DATA:
			return {
				...state,
				isDataLoaded: true,
				combustionBonusesCount: action.payload.forBurningQuantity,
				combustionDate: action.payload.dateBurning,
				currentBonuses: action.payload.currentQuantity,
			};
		default: return state;
	}
}
