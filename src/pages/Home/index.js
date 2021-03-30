import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const {loading, gifs} = useGifs();

    const handleSubmit = evt => {
        // navegar a otra ruta
        evt.preventDefault();
        pushLocation(`/search/${keyword}`);
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <>
            <h3 className="App-title">Los gifs más populares</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword}></input>
            </form>
            <ListOfGifs gifs={gifs} />
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}