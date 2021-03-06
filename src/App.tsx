import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './Pages/Home';
import { Quiz } from './Pages/Quiz';
import './styles/global.css'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/quiz/:id' component={ Quiz } />
      </Switch>
    </Router>
  );
}
