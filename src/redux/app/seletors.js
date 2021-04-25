import {getFormatedDate} from '../../utils/index';

export const getCurrentBonuses = (state) => state.currentBonuses;
export const getCombustionDate = (state) => getFormatedDate(state.combustionDate) ;
export const getCombustionBonusesCount = (state) => state.combustionBonusesCount;
