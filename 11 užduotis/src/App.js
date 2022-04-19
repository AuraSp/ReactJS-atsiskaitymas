import './App.css';
import Navigation from './components/Navigation';
import { Section } from './components/Section';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Switch } from "react-router-dom";
import AppProvider from './components/context/LikesContext';

function App() {

  return (
    <div>
      <Navigation />
      <AppProvider>
        <Section />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </AppProvider>
      <Footer />
    </div>
  );
}

export default App;

