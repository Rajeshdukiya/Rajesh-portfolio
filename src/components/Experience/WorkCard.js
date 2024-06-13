import React, { useContext, useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import Button from '../shared/Button/Button';
import Card from '../shared/Card/Card';
import styles from './PastWork.module.css'

const WorkCard = props => {

    const modeCtx = useContext(ModeChangeContext);

    const [link, setLink] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link])

    return (
        <div data-aos='flip-left' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true' data-aos-offset='100'>
            <Card className={styles.workcard} mode={props.mode}>
                <img src={props.src} alt={props.alt} />
                <div>
                    <h1>{props.heading}</h1>
                    <h2 style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>{props.position}</h2>
                    <h3 style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>{props.duration}</h3>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>{props.detail}</p>
                    {props.button && <Button onClick={() => setLink(`${props.link1}`)}>{props.btn1}</Button>}
                    {props.btn2 && <Button onClick={() => setLink(`${props.link2}`)}>{props.btn2}</Button>}
                </div>
            </Card>
        </div>
    );

};

export default WorkCard;