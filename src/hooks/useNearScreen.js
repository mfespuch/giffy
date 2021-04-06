import { useEffect, useState, useRef } from 'react';

export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(function () {
        let observer;

        const element = externalRef ? externalRef.current : elementRef.current;

        const onChange = (entries, observer) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setShow(true);
                once && observer.disconnect();
            } else {
                !once && setShow(false);
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

        observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        });
        if (element) observer.observe(element);

        return () => observer.disconnect();
    });

    return {isNearScreen, elementRef};
}