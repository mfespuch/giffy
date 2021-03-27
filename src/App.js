import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/colombia">Gifs de colombia</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
        {/* <ListOfGifs keyword='ecuador' /> */}
      </section>
    </div>
  );
}

export default App;
