import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import MainHeader from './Components/MainHeader';
import { EnergyProvider } from './Context/EnergyProvider';
import FormClient from './Components/FormClient';

function App() {
  return (
    <EnergyProvider>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/clients" component={ Clients } />
        <Route path="/signup" component={ FormClient } />
        <Route path="/client/update/:id" component={ FormClient } />
      </Switch>
    </EnergyProvider>
  );
}

export default App;
