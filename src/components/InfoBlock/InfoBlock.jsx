import PropTypes from "prop-types";
import React from "react";
import styles from './InfoBlock.module.scss';
import {shallowEqual, useSelector} from "react-redux";
import {getCombustionBonusesCount, getCombustionDate, getCurrentBonuses, getDataLoaded} from '../../redux/app/seletors';
import {getStringDeclination} from '../../utils/format';
import {DECLINATION_ARRAY} from '../../const/ui-texts'
import fire from '../../img/fire.svg'
import arrow from '../../img/arrow.svg'
import {propTypes} from './InfoBlock-prop';
import {Loader} from '../Loader/Loader';

export const InfoBlock = () => {
	console.log(222);
	const [ combustionDate, combustionBonusesCount, currentBonuses, isDataLoaded ] = withPropsValidation(
		useSelector(state => ([
			getCombustionDate(state),
			getCombustionBonusesCount(state),
			getCurrentBonuses(state),
			getDataLoaded(state),
		]), shallowEqual)
	);

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

const withPropsValidation = (props) => {
	PropTypes.checkPropTypes(propTypes, props, 'prop', '')
	return props
}
