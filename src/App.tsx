import { useEffect, useState } from "react";

import "./App.css";

type Quote = {
  id: number;
  quote: string;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  useEffect(() => {
    fetch(`http://localhost:4000/quotes`)
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);

  return (
    <div className="App">
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
