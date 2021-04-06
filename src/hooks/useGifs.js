import { useState, useEffect, useContext } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifContext';

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
    const {gifs, setGifs} = useContext(GifsContext);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'jedi';

    useEffect(() => {
        // setGifs(DIFFERENT_GIFS);
        setLoading(true);
        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;
        setLoadingNextPage(true);
        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs));
                setLoadingNextPage(false);
            })
    }, [page, keywordToUse, setGifs]);

    return {loading, loadingNextPage, gifs, setPage}
}