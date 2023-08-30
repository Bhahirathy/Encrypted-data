import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function App() {
  const [dataList, setDataList] = useState([]);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    socket.on('data', (data) => {
      setDataList(prevDataList => [...prevDataList, data]);
    });

    socket.on('successRate', (rate) => {
      setSuccessRate(rate);
      console.log('Received success rate:', rate);

    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Real-time Data</h1>
      <p>Success Rate: {successRate}%</p>
      <ul>
        {dataList.map((data, index) => (
          <li key={index}>
            <strong>Name:</strong> {data.name}, <strong>Origin:</strong> {data.origin}, <strong>Destination:</strong> {data.destination}, <strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
