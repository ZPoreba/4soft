import './App.css';
import { Router } from "react-router-dom";
import MainSwitch from "./Switch";
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';

export const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
          <div className="App">
              <MainSwitch/>
          </div>
      </Router>
  );
}

export default App;
