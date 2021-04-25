import {ActionTypes} from './actions';

const initialStore = {
	combustionBonusesCount: 0,
	combustionDate: '',
	currentBonuses: 0,
};

export default function reducer(state = initialStore, action) {
	switch (action.type) {
		case ActionTypes.SAVE_DATA:
			return {
				...state,
				combustionBonusesCount: action.payload.forBurningQuantity,
				combustionDate: action.payload.dateBurning,
				currentBonuses: action.payload.currentQuantity,
			};
		default: return state;
	}
}
