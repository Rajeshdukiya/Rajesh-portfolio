import { useContext } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import styles from './EducationCard.module.css';

const EducationCard = props => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.list} data-aos='fade-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true' data-aos-offset='-100'>
            <div className={styles.points}>
                <img src={props.src} alt={props.alt} />
                <div>
                    <h1>{props.heading}</h1>
                    <h2 style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>{props.degree}</h2>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>{props.subject}</p>
                </div>
            </div>
            <div className={styles['extendable-line']}></div>
        </div>
    );

};

export default EducationCard;