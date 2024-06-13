import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import helloAni from '../../lotties/hello-light.json';


const HelloAnimationLight = () => {

    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: helloAni,
        });
        return () => lottie.stop();
    }, []);

    return <div style={{ height: '150px' }} ref={anime}></div>;

};

export default HelloAnimationLight;