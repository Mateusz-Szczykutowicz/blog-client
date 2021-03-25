import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

// import styles from "../styles/App.module.scss";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
