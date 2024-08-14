import { useContext, useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import useWindowSize from '../../hooks/useWindowSize';
import myimg from '../../assets/rajesh.jpg';
import IconButtons from '../shared/IconButtons/IconButtons';
import styles from './Contact.module.css';

const Contact = () => {

    const modeCtx = useContext(ModeChangeContext);

    const { size: windowSize } = useWindowSize();
    const position = useRef('');

    let fontsize;
    if (windowSize > 1500) {
        fontsize = '10rem';
    }
    else if (windowSize > 768) {
        fontsize = `${windowSize / 10}px`;
    }
    else {
        fontsize = `${windowSize / 12}px`;
    }


    const [margin, setMargin] = useState(0);
    const [pause, setPause] = useState(false);


    useEffect(() => {
        if (pause) {
            return;
        }

        const interval = setInterval(() => {
            setMargin(prevState => {
                if (position.current.offsetLeft === -20) {
                    return windowSize;
                } else {
                    return prevState - 1;
                }
            })
        }, [5]);

        return () => clearInterval(interval);
    }, [margin, pause]);

    const styleLight = {
        background: '#fff',
        color: '#000'
    }

    const styleDark = {
        background: 'linear-gradient(180deg, rgba(14,19,31,1) 0%, rgba(24,30,42,1) 40%, rgba(29,41,68,1) 100%)',
        color: '#fff'
    }

    return (
        <div className={styles.contact} id='contact' style={!modeCtx.mode ? styleLight : styleDark}>
            
            <div className={styles.contact__details} data-aos='fade-down' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
                <div>
                    <h1 className={styles.heading}>Let's build something great!</h1>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Available to work on your projects and bring your ideas to life. I am just a click away!</p>
                    <h2>Frontend Developer</h2>
                    <h2>India</h2>
                    <IconButtons grey />
                </div>
                <img src={myimg} className={styles.img} alt='Vanshita Dev' />
            </div>
            <footer><p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>Designed By Rajesh Dukiya | &#169; 2024 All Rights Reserved</p></footer>
        </div>
    );

};

export default Contact;
