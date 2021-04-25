import React from "react";
import './HeaderText.css'
import {props} from './HeaderText-prop';

const HeaderText = ({text}) => {

	return (
		<div className={'block__text'}>{text}</div>
	);
};

HeaderText.propTypes = props;

export default HeaderText;
