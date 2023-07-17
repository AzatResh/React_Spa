import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Header} from './layout/Header';
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {Movie} from './pages/Movie';
import {NotFound} from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <main className='container'>
          
            <Routes>
              <Route exact path='/' Component={Home}/>
              <Route path='/about' Component={About}/>
              <Route path='/contacts' Component={Contact}/>
              <Route path='/movies/:id' Component={Movie}/>
              <Route path='*' Component={NotFound}/>
            </Routes>

          </main>
      </Router>
    </div>
  );
}

export default App;
