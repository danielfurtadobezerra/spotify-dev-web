import React from 'react'; 
import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Faq from './components/Faq';
import Home from './components/Home';
import Login from './components/Login';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import PlaylistDetail from './components/PlaylistDetail';
import PlaylistsList from './components/PlaylistsList';
import Login2 from './components/Login2';



function App() {
  return (
    <>
    <Cabecalho/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login2' element={<Login2/>}/>
        <Route path='/cad' element={<Form/>}/>
        <Route path='/playlists' element={<PlaylistsList/>}/>
        <Route path='/playlists/:id' element={<PlaylistDetail/>}/>
      


        
        {/* <Route path='/playlist/:id' element={<PlaylistDetail/>}/> */}
    </Routes>
    

    <Menu/>
    </>
  );
}

export default App;
