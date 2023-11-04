import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} name='about' />
          <Route path='/education' element={<Education />} name='education' />
          <Route path='/contact' element={<Contact />} name='contact' />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
