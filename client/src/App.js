import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './components/landing';
import UserProfile from './components/userProfile';
import Posts from './components/posts';
import MakePost from './components/MakePost';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Landing} />
				<Route path="/prof" component={UserProfile} />
				<Route path="/posts" component={Posts} />
				<Route path="/makepost" component={MakePost} />
				<Footer />
			</div>
		</Router>
	);
}

export default App
