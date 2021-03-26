import { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media3.giphy.com/media/DRYU7xgNIJbzQjOOBH/200w.webp?cid=ecf05e47yx7q6e7agxcqcl3l59hw61ght57atrdniyx8bvd7&rid=200w.webp',
  'https://media4.giphy.com/media/0Vv0Ne2CnOClIExIuL/200w.webp?cid=ecf05e47yx7q6e7agxcqcl3l59hw61ght57atrdniyx8bvd7&rid=200w.webp'
];

function App() {
  const [gifs, setGifs] = useState(GIFS);
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
