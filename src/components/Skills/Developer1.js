import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import developerAni1 from '../../lotties/developer2.json';


const Developer1Animation = () => {

    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: developerAni1,
        });
        return () => lottie.stop();
    }, []);

    return <div style={{ height: '50%' }} ref={anime}></div>;

};

export default Developer1Animation;