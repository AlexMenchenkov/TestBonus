import {getFormatedDate} from '../../utils/format';

export const getCurrentBonuses = (state) => state.currentBonuses;
export const getCombustionDate = (state) => getFormatedDate(state.combustionDate) ;
export const getCombustionBonusesCount = (state) => state.combustionBonusesCount;
export const getDataLoaded = (state) => state.isDataLoaded;
