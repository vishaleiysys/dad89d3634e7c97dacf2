import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Weather from "./components/Weather";
import Country from "./components/Country";
function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/country" component={Country} />
          <Route path="/" component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
