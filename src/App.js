import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/clients" component={ Clients } />
      </Switch>
    </div>
  );
}

export default App;
