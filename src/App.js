import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [quote, setQuote] = useState('');
  const [origin, setOrigin] = useState('');

  const handler = async () => {
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      params: {
        language_code: 'en',
      },
      headers: {
        'x-rapidapi-key': 'API-KEY',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setQuote(response.data.content);
      setOrigin(response.data.originator.name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <button onClick={handler} className="btn">
          This will show quotes
        </button>
        <hr />
        <p>{quote}</p>
        <br/>
        <p>- {origin} -</p>
      </div>
    </div>
  );
}

export default App;
