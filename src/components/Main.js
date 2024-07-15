import { Fragment, useContext } from 'react';
import Aos from 'aos';

import ModeChangeContext from '../store/mode-change-context';
import Header from './Header/Header';
import IntroSection from './Introduction/IntroSection';
import WebSkills from './Skills/WebSkills';
import Proficiency from './Skills/Proficiency';
import Education from './Education/Education';
import OpenSource from './OpenSource/OpenSource';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact'

const Main = () => {

    Aos.init();

    const modeCtx = useContext(ModeChangeContext);

    if (modeCtx.mode) {
        document.body.style.backgroundColor = 'var(--body_blue)';
    }
    else {
        document.body.style.backgroundColor = '#fff';
    }

    return (
        <Fragment>
            <Header />
            <IntroSection />
            <WebSkills />
            <Proficiency />
            <OpenSource />
            <Education />
            <Experience />
            <Contact />
        </Fragment >
    );

};

export default Main;