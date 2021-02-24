
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HomeInterface from './Pages/Home/HomeInterface';

import "bootswatch/dist/minty/bootstrap.min.css";
import FamiliaInterface from './Pages/Familia/FamiliaInterface';
import PalabraInterface from './Pages/Palabra/PalabraInterface';
import DataState from './Utils/Context/Data/DataState';

function App() {
  return (

    <DataState>

      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeInterface} />
            <Route path="/familia" exact component={FamiliaInterface} />
            <Route path="/palabra" exact component={PalabraInterface} />


          </Switch>
        </Router>
      </div>
    </DataState>

  );
}

export default App;
