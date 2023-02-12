import './components/Layout/index.scss'
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout/index'
import Home from './components/Home/index.js'
import About from './components/About/index'
import Works from './components/works/index';
import Contact from './components/Contact/index'
import Skills from './components/Skills/index'
import NotFound from './components/NotFound/index.js'
import './App.scss';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element = {<About />} />
            <Route path='/works' element = {<Works />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
