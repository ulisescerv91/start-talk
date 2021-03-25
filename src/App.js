
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HomeInterface from './Pages/Home/HomeInterface';

import "bootswatch/dist/minty/bootstrap.min.css";
import FamiliaInterface from './Pages/Familia/FamiliaInterface';
import PalabraInterface from './Pages/Palabra/PalabraInterface';
import DataState from './Utils/Context/Data/DataState';
import ComidaInterace from './Pages/Comida/ComidaInterace';
import Preguntas from './Pages/Preguntas/Preguntas';

function App() {
  return (

    <DataState>

      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeInterface} />
            <Route path="/familia" exact component={FamiliaInterface} />
            <Route path="/palabra" exact component={PalabraInterface} />
            <Route path="/comida" exact component={ComidaInterace} />
            <Route path="/preguntas" exact component={Preguntas} />



          </Switch>
        </Router>
      </div>
    </DataState>

  );
}

export default App;
