import { useState } from 'react';

import ModeChangeContext from './mode-change-context';

const ModeChangeProvider = props => {

    const [darkMode, setDarkMode] = useState(true);

    const modeChanger = mode => {
        setDarkMode(mode);
    };

    const currentMode = {
        mode: darkMode,
        changeMode: modeChanger
    }

    return <ModeChangeContext.Provider value={currentMode}>
        {props.children}
    </ModeChangeContext.Provider>;

};

export default ModeChangeProvider;