import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListings(data);
      });
  }, []);

  // function handleSearch(name) {
  //   let search_name = name.toLowerCase();
  //   setSearch(search_name);
  // }

  function removeListing(id) {
    console.log(id)
    // setListings(listings.filter((listing) => {
    //   return !(listing.id === id)
    // }));
    setListings(listings.filter(function(listing) {
      let keep_listing = true;
      if(listing.id === id) {
        keep_listing = false;
      } 
      return keep_listing;
    }));
  }
const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );
  // function showLists() {
  //   if(search.length > 0) {
  //     return listings.filter(function(listing) {
  //       let description = listing.description.toLowerCase();
  //       return description.includes(search)) {

  //     });
  //   } else {
  //     return listings;
  //   }
  // }

  return (
    <main className = "App">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} removeListing = {removeListing}/>
    </main>
  )
}
export default App;
