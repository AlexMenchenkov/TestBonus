import React from "react";
import styles from './InfoBlock.module.scss';
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
		<div className={styles.infoBlockContainer}>
			<div className={styles.infoBlock}>
				{!isDataLoaded && <Loader/>}
				{isDataLoaded && <>
				<div className={styles.infoBlockCurrent}>
					{getStringDeclination(currentBonuses, DECLINATION_ARRAY)}
					<img className={styles.imgArrow} src={arrow} alt={'arrow'}/>
				</div>
				<div className={styles.infoBlockCombustion}>
					{combustionDate} сгорит
					<img className={styles.imgFire} src={fire} alt={'fire'}/>
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
