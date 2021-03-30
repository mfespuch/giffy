import './App.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Link, Route } from 'wouter';
import StaticContext from './context/StaticContext';
import { GifsContextPovider } from './context/GifContext';


function App() {
  return (
    <StaticContext.Provider value={{name: 'mfespuch', suscribeteAlCanal: true}}>
      <div className="App">
        <section className="App-content">
        <GifsContextPovider>
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </GifsContextPovider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
