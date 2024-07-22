import { useEffect, useState } from 'react';

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState(1500);

    const getWindowSize = () => {
        const { innerWidth } = window;
        return innerWidth;
    }

    useEffect(() => {
        setWindowSize(getWindowSize());

        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return {
        size: windowSize
    };

};

export default useWindowSize;