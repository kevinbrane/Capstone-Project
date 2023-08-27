import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from '../src/pages/StartPage/StartPage';
import Inner from '../src/pages/Inner/Inner';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/inner" element={<Inner />} />
      </Routes>
    </Router>
  );
}

export default App;
