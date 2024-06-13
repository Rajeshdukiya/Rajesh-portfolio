import { useContext } from 'react';

import ModeChangeContext from '../../../store/mode-change-context';
import styles from './Card.module.css';

const Card = props => {

    const modeCtx = useContext(ModeChangeContext);

    const styleLight = {
        background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 100%)',
        color: '#000',
        boxShadow: '4px 4px 7px #bbbbbb'
    }

    const styleDark = {
        background: 'linear-gradient(0deg, rgba(14,19,31,1) 0%, rgba(27,41,69,1) 100%)',
        color: '#fff',
        boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.7)'
    }

    return <div className={`${styles.card} ${props.className}`} style={!modeCtx.mode ? styleLight : styleDark}>{props.children}</div>;

};

export default Card;