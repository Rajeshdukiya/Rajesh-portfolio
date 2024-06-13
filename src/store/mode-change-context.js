import React from 'react';

const ModeChangeContext = React.createContext({
    mode: true,
    changeMode: (item) => { }
});

export default ModeChangeContext;