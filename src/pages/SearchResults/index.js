import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

export default function SearchResults ({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });

    return <div>
        {loading
            ? <i>Cargando...</i>
            : <ListOfGifs gifs={gifs} />
        }
    </div>
}