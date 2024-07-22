import { useContext } from 'react';

import ModeChangeContext from '../../store/mode-change-context';
import img1a from '../../assets/project1a.jpg';
import img1b from '../../assets/project1b.jpg';
import img2a from '../../assets/project2a.jpg';
import img2b from '../../assets/project2b.jpg';
import ProjectCard from './ProjectCard';
import styles from './OpenSource.module.css';

const OpenSource = () => {

    const modeCtx = useContext(ModeChangeContext);

    return (
        <div className={styles.project} id='open-source' style={{ color: !modeCtx.mode ? '#000' : '#fff', background: !modeCtx.mode ? '#fff' : 'rgba(14,19,31,1)' }}>
            <div>
                <h1 className={styles.project__heading}>Open Source project</h1>
                <p className={styles.project__detail} style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Some cool projects that I built till now...</p>
            </div>
            <div className={styles.project__list}>
                <ProjectCard project='1' src1={img1a} src2={img1b} heading='Cafe Online Order App' detail1='This is a ' name='Cafe Online Order App
 ' detail2="This is an online order cafe application made using React with Cart functionality and other required calculations for items in cart" link='https://cafe-aap.netlify.app/' />
                <ProjectCard project='2' src1={img2a} src2={img2b} heading='
Racing Car Game' detail1='This is a' name='
Car Racing Game ' detail2='where the car can be controlled using the arrow keys. If the car collides with the enemys car, the game stops. The score is displayed on the screen.' link='https://car-game-play.netlify.app' />
            </div>
        </div>
    );

};

export default OpenSource;