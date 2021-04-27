import loader from '../../img/loader.gif'
import './Loader.scss'

export const Loader = () => {
	return(
		<img className={'loader'} src={loader} alt="loading"/>
	)
}

export default Loader;
