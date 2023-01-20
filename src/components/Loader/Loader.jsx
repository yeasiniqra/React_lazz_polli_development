
import Preloader from '../Preloader/Preloader';
import styles from './Loader.module.css';

const Loader = ({className, zIndex, isLoading}) => {
    if(!isLoading) return <></>;
    return <div className={`${styles.loader} ${className}`} style={{zIndex}}>
        <Preloader />
    </div>
}

export default Loader;