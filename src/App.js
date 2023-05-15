import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import "./App.css"

function App() {
  const [loaded, setLoaded] = useState(false);
  const [histogramData, setHistogramData] = useState([]);

  const handleButtonClick = async () => {
    const response = await axios.get('https://www.terriblytinytales.com/test.txt');
    const text = response.data;

    const words = text.split(/\s+/);
    const frequencies = {};

    words.forEach((word) => {
      frequencies[word] = (frequencies[word] || 0) + 1;
    });

    const sortedFrequencies = Object.entries(frequencies)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);

    const histogramData = sortedFrequencies.map(([word, count]) => ({
      word,
      count,
    }));

    setHistogramData(histogramData);
    setLoaded(true);
  };

  return (
    <div>
      {!loaded && (
        <button className="SubmitButton" onClick={handleButtonClick}>
          Submit
        </button>
      )}
      {loaded && (
        <div>
          <BarChart  className='BarChart' width={600} height={450} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            
            <XAxis dataKey="word" angle={-50} textAnchor="end" interval={0} />
             
            <YAxis/>
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
          <button className='ExportButton' onClick={() => {
            const csvData = histogramData.map(({ word, count }) => `${word},${count}`).join('\n');
            const blob = new Blob([csvData], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'histogram.csv';
            link.click();
          }}>
            Export
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
