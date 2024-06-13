import { useContext } from 'react';

import ModeChangeContext from '../../../store/mode-change-context';
import styles from './Button.module.css';

const Button = props => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <button className={`${styles['btn-primary']}  ${props.inverse && styles['btn--inverse']}  ${props.round && styles['btn--round']}  ${props.className}`} type={props.type || 'button'}  style={{ boxShadow: !modeCtx.mode ? '0 2px 8px #919191' : '0 2px 8px rgba(0, 0, 0, 0.7)', background: !modeCtx.mode ? '#c3c3c3' : 'var(--light_blue)'}} onClick={props.onClick}>
            {props.children}
        </button>
    );

};

export default Button;