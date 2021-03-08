import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';

const Routes = () =>{ 
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    
    </Router>
  );
}
export default Routes;
