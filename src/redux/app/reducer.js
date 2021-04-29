import {INIT_VALUE} from '../../const/numbers';
import {ActionTypes} from './actions';

const initialStore = {
	combustionBonusesCount: INIT_VALUE,
	combustionDate: '',
	currentBonuses: INIT_VALUE,
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
