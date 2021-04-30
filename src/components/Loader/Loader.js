import loader from '../../img/loader.gif';
import styles from './Loader.module.scss';

export const Loader = () => {
	return(
		<img className={styles.loader} src={loader} alt="loading"/>
	)
}
