import { useContext } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import styles from './Skills.module.css';
import Aos from 'aos';

const Proficiency = () => {

    const modeCtx = useContext(ModeChangeContext);


    const styleLight = {
        background: '#fff',
        color: '#000'
    }

    const styleDark = {
        background: 'linear-gradient(0deg, rgba(14,19,31,1) 0%, rgba(29,41,68,1) 100%)',
        color: '#fff'
    }

    return (
        <div style={!modeCtx.mode ? styleLight : styleDark}>
            <div className={styles.proficiency} data-aos='fade-right' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-delay='200' data-aos-once='true' data-aos-offset='-100' style={{color: !modeCtx.mode ? '#000' : '#fff'}}>
                <h1 className={styles.heading}>Proficiency</h1>
                <div className={styles.proficiency__points}>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Programming Languages</p>
                    <div className={styles.bar}><div className={styles.bar__color} id={styles.bar1}></div></div>
                </div>
                <div className={styles.proficiency__points}>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Libraries and frameworks</p>
                    <div className={styles.bar}><div className={styles.bar__color} id={styles.bar2}></div></div>
                </div>
                <div className={styles.proficiency__points}>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>User interface (UI)</p>
                    <div className={styles.bar}><div className={styles.bar__color} id={styles.bar3}></div></div>
                </div>
                <div className={styles.proficiency__points}>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Application Programming Interfaces (APIs)</p>
                    <div className={styles.bar}><div className={styles.bar__color} id={styles.bar4}></div></div>
                </div>
            </div>
        </div>
    );

};

export default Proficiency;