import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { useCallback, useEffect, useRef } from 'react';

export default function SearchResults ({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    // const debounceHandleNextPage = useRef();
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });
    console.log(isNearScreen);
    // const handleNextPage = () => setPage(prevPage => prevPage +1);

    // const handleNextPage = () => console.log('next page');

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage +1), 100
    ), [setPage]);

    useEffect(() => {
        isNearScreen && debounceHandleNextPage();
    }, [debounceHandleNextPage, isNearScreen])

    return <div>
        {loading
            ? <i>Cargando...</i>
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
              </>
        }
    </div>
}