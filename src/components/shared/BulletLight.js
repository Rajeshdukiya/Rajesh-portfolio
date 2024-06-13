import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import bullet from '../../lotties/bullet-light.json';


const BulletAnimationLight = () => {

    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: bullet,
        });
        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;

};

export default BulletAnimationLight;