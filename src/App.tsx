import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from '../src/pages/StartPage/StartPage';
import Inner from '../src/pages/Inner/Inner';

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
