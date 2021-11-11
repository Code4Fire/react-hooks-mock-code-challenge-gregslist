import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data.listings);
        console.log(data);
      });
  }, []);

  return (
    <main>
      <Header listings={listings} />
      <ListingsContainer listings={listings} setListings = {setListings}/>
    </main>
  )
}
export default App;
