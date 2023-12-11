import React, { useState, useEffect } from 'react';

export function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('running using effect');
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e);
    });
  }, []);

  return (
    <div>
      <h1>CSR and SSG</h1>
      <p>{data ? `Your data: ${JSON.stringify(data)}` : 'Loading...'}</p>
    </div>
  );
}

export default Page;
