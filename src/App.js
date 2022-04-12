import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Faq from './components/Faq';
import Home from './components/Home';
import Login from './components/Login';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import PlayHome from './components/PlayHome';


function App() {
  return (
    <>
    <Cabecalho/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cad' element={<Form/>}/>
        <Route path='/play' element={<PlayHome/>}/>
        
        {/* <Route path='/playlist/:id' element={<PlaylistDetail/>}/> */}
    </Routes>
    

    <Menu/>
    </>
  );
}

export default App;
