import "./App.css";
import "./style/Styling.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import WhatIsAegle from "./views/WhatIsAegle";
import RequestPricing from "./views/RequestPricing";
import SimulateAegle from "./views/SimulateAegle";
import What2 from "./views/What2";
import Why from "./views/Why";
import SimulationWrapper from "./views/SimulationWrapper";
import NSimulation from "./views/NSimulation";
import CustomSimulation from "./views/CustomSimulation";

import Processing from "./views/Processing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/whatIsAegle">
                        <WhatIsAegle />
                    </Route>
                    <Route path="/requestPricing">
                        <RequestPricing />
                    </Route>
                    <Route path="/simulateAegle">
                        <SimulateAegle />
                    </Route>
                    <Route path="/processSimulation">
                        <Processing />
                    </Route>
                    <Route path="/customSimulation">
                        <CustomSimulation />
                    </Route>
                    <Route path="/selectSimulation">
                        <SimulationWrapper />
                    </Route>
                    <Route path="/normalSimulation">
                        <NSimulation />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
