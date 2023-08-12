import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Components/StartPage/StartPage';
import Inner from './Components/Inner/Inner';

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
