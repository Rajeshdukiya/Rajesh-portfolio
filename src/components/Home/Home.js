import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../shared/Button/Button';
import styles from './Home.module.css';

const Home = () => {

    const { size: windowSize } = useWindowSize();

    const modeCtx = useContext(ModeChangeContext);

    const scrollRef = useRef(null);
    const [currentMargin, setCurrentMargin] = useState(0);

    const scrollEffect = () => {
        setCurrentMargin(window.pageYOffset);
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollEffect);

        return () => window.removeEventListener('scroll', scrollEffect);
    }, []);

    // console.log(currentMargin + 150)


    let fontsize, defaultmarginleft, setmarginleft, defaultwidth, setwidth, screenwidth, setheight;
    if (windowSize > 1500) {
        fontsize = '9rem';
        defaultmarginleft = '73px';
        defaultwidth = '250px';
        screenwidth = `calc(${currentMargin * 5}px + ${windowSize}px`;
        setmarginleft = `calc(${-currentMargin * 2}px + ${defaultmarginleft})`;
        setwidth = `calc(${currentMargin * 5}px + ${defaultwidth}`;
        setheight = '2rem';
    }
    else if (windowSize > 768) {
        fontsize = `${windowSize / 10}px`;
        defaultmarginleft = `${windowSize / 50}px`
        defaultwidth = '150px';
        screenwidth = `calc(${currentMargin * 5}px + ${windowSize}px`;
        setmarginleft = `calc(${-currentMargin * 2}px + ${defaultmarginleft})`;
        setwidth = `calc(${currentMargin * 4}px + ${defaultwidth})`;
        setheight = `${windowSize / 40}px`;
    }
    else {
        fontsize = `${windowSize / 12}px`;
        defaultmarginleft = `${windowSize / 50}px`;
        defaultwidth = '75px';
        screenwidth = `calc(${currentMargin * 5}px + ${windowSize}px`;
        setmarginleft = `calc(${-currentMargin * 2}px + ${defaultmarginleft})`;
        setwidth = `calc(${currentMargin * 3}px + ${defaultwidth})`;
        setheight = `${windowSize / 40}px`;
    }


    const styleLight = {
        background: '#fff',
        color: '#000'
    }

    const styleDark = {
        background: 'linear-gradient(0deg, rgba(14,19,31,1) 0%, rgba(24,30,42,1) 40%, rgba(29,41,68,1) 100%)',
        color: '#fff'
    }


    return (
        <div className={styles.home} ref={scrollRef} data-aos='fade-up' data-aos-duration='700' data-aos-easing='ease-in-out' style={!modeCtx.mode ? styleLight : styleDark}>
            <div className={styles['home--first']} style={{ width: (currentMargin === 0) ? `${windowSize}px` : screenwidth, fontSize: fontsize }}>
                <h1 style={{ marginLeft: (currentMargin === 0) ? defaultmarginleft : setmarginleft, color: !modeCtx.mode ? 'var(--light_mode_grey)' : 'rgba(170, 170, 170, 0.6)' }}><span>F</span><span>R</span><span>O</span><span>N</span><span>T</span></h1>
                <div className={styles['extendable-line']} style={{ width: (currentMargin === 0) ? defaultwidth : setwidth, marginLeft: defaultmarginleft, height: setheight, backgroundColor: !modeCtx.mode ? 'var(--light_mode_grey)' : 'rgba(170, 170, 170, 0.6)' }}></div>
                <h1 style={{ marginLeft: `calc(${defaultmarginleft} + 10px)`, color: !modeCtx.mode ? 'var(--light_mode_grey)' : 'rgba(170, 170, 170, 0.6)' }}><span>E</span><span>N</span><span>D</span></h1>
            </div>
            <div className={styles['home--second']} style={{ fontSize: fontsize }}>
                <h1 style={{ marginLeft: defaultmarginleft, color: !modeCtx.mode ? 'var(--light_mode_grey)' : 'rgba(170, 170, 170, 0.6)' }}><span>D</span><span>E</span><span>V</span><span>E</span><span>L</span><span>O</span><span>P</span><span>E</span><span>R</span></h1>
                <div>
                    <p style={{ color: !modeCtx.mode ? '#000' : '#fff', fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}></p>
                    <a href='#contact' alt='Contact Me'><Button style={{ boxShadow: !modeCtx.mode ? '0 2px 8px #919191' : '0 2px 8px rgba(0, 0, 0, 0.7)'}} className={styles.btn}>Contact me</Button></a>
                </div>
            </div>
        </div>
    )
}

export default Home;