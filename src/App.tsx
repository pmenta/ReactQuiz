import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
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
