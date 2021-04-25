import React from "react";
import HeaderText from '../../components/HeaderText/HeaderText';
import Bage from '../../components/Bage/Bage';
import './Block.css'

const Block = ({text, symbol, background}) => {

	return (
		<div style={{background: `${background}`}} className={'block'}>
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

export default Block;
