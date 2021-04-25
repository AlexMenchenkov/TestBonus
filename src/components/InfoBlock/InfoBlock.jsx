import React from "react";
import './InfoBlock.css'
import {connect} from "react-redux";
import {getCombustionBonusesCount, getCombustionDate, getCurrentBonuses} from '../../redux/app/seletors';
import {getStringDeclination} from '../../utils/index';
import {declinationArray} from '../../const/const'
import fire from '../../img/fire.svg'
import arrow from '../../img/arrow.svg'
import {props} from './InfoBlock-prop';

const InfoBlock = ({currentBonuses, combustionDate, combustionBonusesCount}) => {

	return (<>
		<div className={'info-block'}>
			<div className={'info-block__current'}>{getStringDeclination(currentBonuses, declinationArray)}</div>
			<div className={'info-block__combustion'}>
				{combustionDate} сгорит&nbsp;&nbsp;
				<img className={'img-fire'} src={fire} alt={'fire'}/>&nbsp;&nbsp;
				{getStringDeclination(combustionBonusesCount, declinationArray)}
			</div>
			<img className={'img-arrow'} src={arrow} alt={'arrow'}/>
		</div>
	</>);
};

InfoBlock.propTypes = props;

const mapStateToProps = state => ({
	combustionDate: getCombustionDate(state),
	combustionBonusesCount: getCombustionBonusesCount(state),
	currentBonuses: getCurrentBonuses(state),
});

export {InfoBlock};
export default connect(mapStateToProps)(InfoBlock);
