import React from "react";
import './InfoBlock.css'
import {getStringDeclination} from '../../utils/index';
import {declinationArray} from '../../const/const'
import fire from '../../img/fire.svg'
import arrow from '../../img/arrow.svg'

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

export default InfoBlock;
