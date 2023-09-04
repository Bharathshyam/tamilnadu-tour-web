
import './App.css';
import NaviLink from './components/NaviLink';
import Places from './components/Places';
import TopBar from './components/TopBar';
import Besttimetovisit from './components/Besttimetovisit';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Food from './components/Food';

import Packages from './components/Packages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar/>}>
          <Route index element={<NaviLink/>}/>
          <Route path="places"element={<Places/>}/>
          <Route path="besttimetovisit"element={<Besttimetovisit/>}/>
          <Route path="packages"element={<Packages/>}/>
          
          <Route path="food"element={<Food/>}/>
          
          </Route>
        </Routes>
      
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
