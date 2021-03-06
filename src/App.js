import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";
import QuotesDetail from "./pages/QuotesDetail";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/char/:char_id" component={Detail} />
          <Route exact path="/quotes" component={Quotes} />
          <Route path="/quotes/:quote_id" component={QuotesDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
