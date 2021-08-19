import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocationDetails from "./LocationDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* defines where page content should go & only one route shows at one time */}
          <Switch>
            {/* route for each page */}
            <Route exact path="/">
              {/* nest home component */}
              <Home />
            </Route>
            {/* <Route path="/create">
              <Create />
            </Route> */}
            <Route path="/locations/:id">
              <LocationDetails />
            </Route>
            {/* will always match so is a catch-all */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
