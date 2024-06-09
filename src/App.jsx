import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3300/api');
      const data = await response.json();
      setData(data.message);
    }
    fetchData();
  }, []);

  const [data, setData] = useState();

  return <p>{data}</p>;
}

export default App;
