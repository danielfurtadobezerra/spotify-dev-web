import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Faq from './components/Faq';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Cabecalho/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path='/faq' element={<Faq/>}/>
    </Routes>

    <Menu/>
    </>
  );
}

export default App;
