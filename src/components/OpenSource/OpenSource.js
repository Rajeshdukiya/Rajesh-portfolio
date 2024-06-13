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
                <ProjectCard project='1' src1={img1a} src2={img1b} heading='Website Builder App' detail1='This is a ' name='Website Builder AppApplication ' detail2="made using React.js that significantly reduces the time it takes to create a website. Developers don't need to write code from scratch, speeding up the development process." link='https://web-application-builder-nu.vercel.app/' />
                <ProjectCard project='2' src1={img2a} src2={img2b} heading='Expense Tracker App' detail1='This is a' name=' Full-Stack Expense Tracker App' detail2='made using React.js, Firebase, Google Charts. This application helps users gain a better understanding of their spending habits, enabling them to make informed financial decisions.' link='https://expense-tracker-app-delta-one.vercel.app/sign-in' />
            </div>
        </div>
    );

};

export default OpenSource;