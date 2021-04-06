import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';

// import() como función es asincrono y devuelve una promesa, arriba los import son sincronos
const TrendingSearches = React.lazy(
    () => import('./TrendingSearchesLazy')
);

export default function LazyTrending () {
    const { isNearScreen, elementRef } = useNearScreen({});

    return <div ref={elementRef}>
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}