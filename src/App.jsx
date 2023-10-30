import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
