import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import animation from '../../lotties/rabbit-light.json';


const RabbitAnimationLight = () => {

    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation,
        });
        return () => lottie.stop();
    }, []);

    return <div style={{ height: '53rem', maxWidth: '100vw' }} ref={anime}></div>;

};

export default RabbitAnimationLight;