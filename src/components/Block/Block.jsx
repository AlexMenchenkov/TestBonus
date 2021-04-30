import React from "react";
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {Bage} from '../../components/Bage/Bage';
import styles from './Block.module.scss';
import {propTypes} from './Block-prop';

export const Block = ({text, symbol, classStyle}) => {

	return (
		<div className={`${styles.block} ${styles[classStyle]}`}>
			{text && <HeaderText
				text={text}
			>
			</HeaderText>}
			{symbol && <Bage
				symbol={symbol}
			>
			</Bage>}
		</div>
	);
};

Block.propTypes = propTypes;
