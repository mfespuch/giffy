import { useEffect, useState, useRef } from 'react';

export default function useNearScreen ({ distance = '100px' }) {
    const [isNearScreen, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(function () {
        const onChange = (entries, observer) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setShow(true);
                observer.disconnect();
            }
        };

        // Promise.resolve(
        //     typeof IntersectionObserver !== 'undefined'
        //         ? IntersectionObserver
        //         : import('intersection-observer')
        // ).then(() => {
        //     const observer = new IntersectionObserver(onChange, {
        //         rootMargin: '100px'
        //     });
        //     observer.observe(elementRef.current);
        // });

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        });
        observer.observe(elementRef.current);

        return () => observer.disconnect();
    });

    return {isNearScreen, elementRef};
}