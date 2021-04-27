import React from "react";
import './InfoBlock.scss'
import {connect} from "react-redux";
import {getCombustionBonusesCount, getCombustionDate, getCurrentBonuses, getDataLoaded} from '../../redux/app/seletors';
import {getStringDeclination} from '../../utils/format';
import {DECLINATION_ARRAY} from '../../const/ui-texts'
import fire from '../../img/fire.svg'
import arrow from '../../img/arrow.svg'
import {props} from './InfoBlock-prop';
import Loader from '../Loader/Loader';

const InfoBlock = ({currentBonuses, combustionDate, combustionBonusesCount, isDataLoaded}) => {

	return (<>
		<div className={'info-block-container'}>
			<div className={'info-block'}>
				{!isDataLoaded && <Loader/>}
				{isDataLoaded && <>
				<div className={'info-block__current'}>
					{getStringDeclination(currentBonuses, DECLINATION_ARRAY)}
					<img className={'img-arrow'} src={arrow} alt={'arrow'}/>
				</div>
				<div className={'info-block__combustion'}>
					{combustionDate} сгорит
					<img className={'img-fire'} src={fire} alt={'fire'}/>
					{getStringDeclination(combustionBonusesCount, DECLINATION_ARRAY)}
				</div>
				</>}
			</div>
		</div>
	</>);
};

InfoBlock.propTypes = props;

const mapStateToProps = state => ({
	combustionDate: getCombustionDate(state),
	combustionBonusesCount: getCombustionBonusesCount(state),
	currentBonuses: getCurrentBonuses(state),
	isDataLoaded: getDataLoaded(state),
});

export {InfoBlock};
export default connect(mapStateToProps)(InfoBlock);
