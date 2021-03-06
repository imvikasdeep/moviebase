import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Genre from './pages/Genre';
import Search from './pages/Search';
import Lost from './pages/Lost';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import Trending from './pages/Trending';
import Person from './pages/Person';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/main.scss';

function App() {
  return (
    <Router>
		<div className="App">
			<Header />

			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/movie/:id" exact={true} component={MovieDetails} />
				<Route path="/upcoming" exact={true} component={Upcoming} />
				<Route path="/top-rated" exact={true} component={TopRated} />
				<Route path="/trending" exact={true} component={Trending} />
				<Route path="/genre/:type" exact={true} render={props => <Genre {...props} />} />
				<Route path="/search/:search" exact={true} render={props => <Search {...props} />} />
				<Route path="/person/:id" exact={true} component={Person} />
				<Route component={Lost} exact={true} />
			</Switch>

			<Footer />
		</div>
	</Router>
  );
}

export default App;
