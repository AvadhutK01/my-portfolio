import { useEffect, useState, useRef } from 'react';

interface UseInViewOnDownScrollOptions {
    threshold?: number;
}

export function useInViewOnDownScroll(options: UseInViewOnDownScrollOptions = {}) {
    const { threshold = 0.3 } = options;
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > lastScrollY.current;

                // Only trigger animation when scrolling down and element is in view
                if (entry.isIntersecting && isScrollingDown && !hasAnimated) {
                    setIsInView(true);
                    setHasAnimated(true);
                } else if (!entry.isIntersecting && isScrollingDown) {
                    // Reset when scrolling down past the element
                    setHasAnimated(false);
                    setIsInView(false);
                }

                lastScrollY.current = currentScrollY;
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, hasAnimated]);

    return { ref: elementRef, isInView };
}
