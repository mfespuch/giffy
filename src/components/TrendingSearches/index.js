import React, {useEffect, useState, useRef} from 'react';
import getTrendingTerms from 'services/getTrendingTermsService';
import Category from 'components/Category';
import useNearScreen from 'hooks/useNearScreen';

function TrendingSearches () {
    const [trends, setTrends] = useState([]);

    useEffect(function () {
        getTrendingTerms().then(setTrends);
    }, [])

    return <Category name="Tendencias" options={trends}/>
}

export default function LazyTrending () {
    const { isNearScreen, elementRef } = useNearScreen({});

    return <div ref={elementRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div>
}