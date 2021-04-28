import React from "react";
import HeaderText from '../../components/HeaderText/HeaderText';
import Bage from '../../components/Bage/Bage';
import styles from './Block.module.scss';
import {props} from './Block-prop';

const Block = ({text, symbol, background}) => {

	return (
		<div style={{background: `${background}`}} className={styles.block}>
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

Block.propTypes = props;

export default Block;
