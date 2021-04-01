import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';

export default function SearchResults ({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });

    return <div>
        {loading
            ? <i>Cargando...</i>
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
              </>
        }
    </div>
}