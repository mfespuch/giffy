import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs ({ params }) {
    const { keyword } = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setGifs(DIFFERENT_GIFS);
        setLoading(true);
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs)
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <i>Cargando...</i>

    return <div>
        {
            gifs.map(({id, title, url}) => 
                <Gif 
                id={id}
                key={id}
                title={title}
                url={url}
                />
            )
        }
    </div>
}