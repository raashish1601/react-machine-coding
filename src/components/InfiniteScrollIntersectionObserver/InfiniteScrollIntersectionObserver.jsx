import React, { useRef, useCallback } from 'react';

function InfiniteScrollIntersectionObserver({
  fetchMore,
  hasMore,
  loading,
  threshold = 300,
  loader = <div>Loading...</div>,
  initialLoad = true,
  children,
}) {
  const observerRef = useRef(null);

  const observerCallback = useCallback(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loading && hasMore) {
          fetchMore();
        }
      });
    },
    [fetchMore, hasMore, loading]
  );

  // Create Intersection Observer when component mounts
  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: `${threshold}px`,
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [observerCallback, threshold]);

  // Observe the last element in the list
  useEffect(() => {
    if (observerRef.current && !loading && hasMore) {
      observerRef.current.observe(document.getElementById('infinite-scroll-bottom'));
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(document.getElementById('infinite-scroll-bottom'));
      }
    };
  }, [hasMore, loading]);

  useEffect(() => {
    if (initialLoad) {
      fetchMore();
    }
  }, [fetchMore, initialLoad]);

  return (
    <>
      {children}
      {loading && loader}
      <div id="infinite-scroll-bottom" />
    </>
  );
}

export default InfiniteScrollIntersectionObserver;
