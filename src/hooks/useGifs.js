import { useState, useEffect, useContext } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifContext';

export function useGifs({ keyword } = { keyword: null }) {
    const {gifs, setGifs} = useContext(GifsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setGifs(DIFFERENT_GIFS);
        setLoading(true);
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'jedi';
        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword, setGifs]);

    return {loading, gifs}
}