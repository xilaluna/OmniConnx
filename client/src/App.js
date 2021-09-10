import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Landing from './components/landing'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing}/>
        {/* <Route path="/" component={} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
