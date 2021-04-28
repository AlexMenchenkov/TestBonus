import React from "react";
import styles from './HeaderText.scss'
import {props} from './HeaderText-prop';

const HeaderText = ({text}) => {

	return (
		<div className={styles.block__text}>{text}</div>
	);
};

HeaderText.propTypes = props;

export default HeaderText;
