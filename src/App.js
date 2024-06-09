import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './component/AddStudent';
import SearchStudent from './component/SearchStudent';
import DeleteStudent from './component/DeleteStudent';
import ViewAll from './component/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddStudent/>}/>
        <Route path="/search" element={<SearchStudent/>}/>
        <Route path="/delete" element={<DeleteStudent/>}/>
        <Route path="/viewall" element={<ViewAll/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
