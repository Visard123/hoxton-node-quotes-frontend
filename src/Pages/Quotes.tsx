import { useEffect, useState } from "react";

export function Quotes() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/quotes`)
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);

  return (
    <div className="all-quotes">
      <li>{quotes}</li>
    </div>
  );
}
