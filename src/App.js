import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/main.scss';

function App() {
  return (
    <Router>
		<div className="App">
			<Header />

			<Switch>
				<Route path="/" exact="true" component={Home} />
			</Switch>

			<Footer />
		</div>
	</Router>
  );
}

export default App;
