import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Recrutement } from "./components/Pages/Recrutement";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/recrutement" component={Recrutement} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      <Footer />

    </>
  );
}

export default App;
