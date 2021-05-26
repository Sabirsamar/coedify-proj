import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path ="/" component = {Home} />
          <Route exact path ="/contact" component = {Contact} />
          <Route exact path ="/about" component = {About} />
          <Route exact path ="/" component = {Home} />
          </Switch>
       
      </div>
    </Router >

  );
}

export default App;
