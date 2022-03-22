import logo from './logo.svg';
import Cabecalho from './components/Cabecalho'; '../src/components/Cabecalho';
import Menu from './components/Menu'; '..src/components/Menu';

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
