import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import nit from '../../assets/MDSU-logo.png';
import EducationCard from './EducationCard';
import styles from './Education.module.css';

const Education = () => {

    const modeCtx = useContext(ModeChangeContext);

    const styleLight = {
        background: 'rgb(255,255,255)',
        color: '#000'
    }

    const styleDark = {
        background: 'linear-gradient(0deg, rgba(14,19,31,1) 0%, rgb(22, 33, 58) 30%, rgba(14,19,31,1) 110%)',
        color: '#fff'
    }

    return (
        <div className={styles.education} style={!modeCtx.mode ? styleLight : styleDark}>
            <h1 className={styles.heading}>Education</h1>
            <EducationCard src={nit} alt={'MDSU Ajmer'} heading={'Maharshi Dayanand Saraswati University, Ajmer'} degree={`Master of Computer Science`} subject={'Computer Science'} />
        </div>
    );

};

export default Education;