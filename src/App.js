import logo from './logo.svg';
import './App.css';
import StudentEntry from './component/StudentEntry';
import SearchStudent from './component/SearchStudent';
import StudentSystem from './component/StudentSystem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<StudentEntry/>} />
<Route path='/search' element={<SearchStudent/>} />
<Route path='/sys' element={<StudentSystem/>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
