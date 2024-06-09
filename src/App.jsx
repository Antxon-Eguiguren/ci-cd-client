import { useEffect, useState } from 'react';

function App() {
  const baseUrl =
    import.meta.env.VITE_REACT_APP_NODE_ENV === 'development'
      ? import.meta.env.VITE_REACT_APP_LOCAL_BASE_URL
      : import.meta.env.VITE_REACT_APP_SERVER_BASE_URL;

  console.log('ENV: ', import.meta.env);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${baseUrl}/api`);
      const data = await response.json();
      setData(data.message);
    }
    fetchData();
  }, [baseUrl]);

  const [data, setData] = useState();

  return <p>{data}</p>;
}

export default App;
