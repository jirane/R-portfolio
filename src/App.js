import './components/Layout/index.scss'
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout/index'
import Home from './components/Home/index.js'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Skills from './components/Skills/index'
import './App.scss';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element = {<About />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/skills' element={<Skills />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
