import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import MonthPage from './components/monthPage/MonthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='track/*' element={<MonthPage />}></Route>
        <Route path="*" element={<Navigate to={'/track'} replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
