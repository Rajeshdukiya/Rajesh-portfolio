import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import mdsu from '../../assets/MDSU-logo.png';
import solar from '../../assets/solar.png';
import WorkCard from './WorkCard';
import styles from './PastWork.module.css'

const Experience = () => {

    const modeCtx = useContext(ModeChangeContext);

    const styleLight = {
        background: 'rgb(255,255,255)',
        color: '#000'
    }

    const styleDark = {
        background: 'rgb(14,19,31)',
        color: '#fff'
    }

    return (
        <div className={styles.section} id='experience' style={!modeCtx.mode ? styleLight : styleDark}>
            <div>
                <h1 className={styles.heading}>Experience</h1>
                <p className={styles.detail} style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>My Experience as a Front-end Web Developer...</p>
            </div>
            <div className={styles.list}>
                <WorkCard src={mdsu} alt={'MDSU Ajmer'} heading={'Computer Science Department MDSU'} duration={'2021 - Present'} position={'Front-End Developer'} detail={'Responsible for expanding features and creating a website producing smoother operations which enhance user engagement and contains interactive features. Contributed in:'} button link1={'https://www.mdsuexam.org/MdSmaINpanel.php'} btn1='Official Website'/>
                <WorkCard src={solar} alt={'Skilly Pandaz'} heading={'Skilly Pandaz'} duration={' Mar 2023 - May 2023'} position={'Front-End Developer'} detail={'Responsible for producing visual elements by translating UI/UX design wireframes into code and thus producing high quality, reusable markup using React.js, Javascript, CSS3, HTML5.'} button link1={'https://github.com/Rajeshdukiya/Car-Game/blob/main/README.md'} btn1='Project (Racing Car Game)' />
            </div>
        </div>
    );

};

export default Experience;
