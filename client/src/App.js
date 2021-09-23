import "./App.css"
import { HashRouter as Router, Route } from "react-router-dom"
import NavigationBar from "./components/Navbar/NavigationBar"
import Footer from "./components/footer"
import Landing from "./components/landing"
import UserProfile from "./components/userProfile"
import Posts from "./components/posts"
import MakePost from "./components/MakePost"
import "bootstrap/dist/css/bootstrap.min.css"

// Redux
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reduxcomps/reducers"

const POST_STATE = "POST_STATE"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(POST_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(POST_STATE, serializedState)
  } catch (err) {
    console.log("Error saving data:" + err)
  }
}

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Landing} />
          <Route path="/prof" component={UserProfile} />
          <Route path="/posts" component={Posts} />
          <Route path="/makepost" component={MakePost} />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
