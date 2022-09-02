import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import MonthPage from './components/monthPage/MonthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='track' element={<MonthPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
