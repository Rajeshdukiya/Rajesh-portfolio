import { Navigate, Route, Routes } from 'react-router-dom';

import Main from './components/Main';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/*' element={<Navigate replace to='/' />} />
    </Routes>
  );
  
};

export default App;
