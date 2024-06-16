import { useContext, useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import RabbitAnimationDark from './RabbitAnimationDark';
import RabbitAnimationLight from './RabbitAnimationLight';
import IconButtons from '../shared/IconButtons/IconButtons';
import HelloAnimationDark from './HelloDark';
import HelloAnimationLight from './HelloLight';
import Button from '../shared/Button/Button';
import styles from './IntroSection.module.css';


const IntroSection = () => {

    const modeCtx = useContext(ModeChangeContext);

    const [link, setLink] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link]);

    return (
        <div className={styles.intro} id='intro' style={{ color: !modeCtx.mode ? '#000' : '#fff', background: !modeCtx.mode ? '#fff' : 'rgba(14,19,31,1)' }}>
            <aside className={styles.intro__aside} data-aos='zoom-out' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true' data-aos-offset='-300'>
                <section>
                    <h1>
                        Hi, I’m Rajesh
                        <span>
                            {!modeCtx.mode ? <HelloAnimationLight /> : <HelloAnimationDark />}
                        </span>
                    </h1>
                </section>
                <h2>I design & build user interfaces from small business sites to rich interactive web apps.</h2>
                <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>I am a Frontend Web Developer with experience of building web applications with React.js {/* / Next.js  */}/ Javascript and some other cool libraries, custom plugins, animations and frameworks.</p>
                <IconButtons inverse />
                <div className={styles.intro__btn}>
                    <Button id='btn4' onClick={() => setLink('https://drive.google.com/file/d/10Vtv1SCbJQajNTPlOV7XwFDK-VwcekkO/view')}>MY RESUME</Button>
                    <a href='#contact' alt='Contact Me'><Button id='btn5'>CONTACT ME</Button></a>
                </div>
            </aside>
            <div className={styles.animation} style={{background: !modeCtx.mode ? '#fff' : 'radial-gradient(closest-side, rgba(44,56,83,1) 0%, rgba(14,19,31,1) 100%)' }}>{!modeCtx.mode ? <RabbitAnimationLight /> : <RabbitAnimationDark />}</div>
        </div>
    );

};

export default IntroSection;
