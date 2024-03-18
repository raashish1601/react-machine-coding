import React, { useEffect } from 'react';

function InfiniteScrollWindowHeight({
  fetchMore,
  hasMore,
  loading,
  threshold = 300,
  loader = <div>Loading...</div>,
  initialLoad = true,
  children,
}) {
  useEffect(() => {
    if (initialLoad) {
      fetchMore();
    }
  }, [fetchMore, initialLoad]);

  useEffect(() => {
    if (!loading && hasMore) {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - threshold
        ) {
          fetchMore();
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [fetchMore, hasMore, loading, threshold]);

  return (
    <>
      {children}
      {loading && loader}
    </>
  );
}

export default InfiniteScrollWindowHeight;







// import React, { useState } from 'react';
// import InfiniteScroll from './InfiniteScroll';

// function MyComponent() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchData = async () => {
//     setLoading(true);
//     // Fetch data from API
//     // Update data state
//     // Update hasMore state based on API response
//     setLoading(false);
//   };

//   return (
//     <InfiniteScroll
//       fetchMore={fetchData}
//       hasMore={hasMore}
//       loading={loading}
//     >
//       {data.map(item => (
//         <div key={item.id}>{/* Render your item */}</div>
//       ))}
//     </InfiniteScroll>
//   );
// }