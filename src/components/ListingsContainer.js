import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
  
  return (
    <main>
      <ul className="cards">
        {setListings.map((listing) => {
          return (
          <ListingCard
          key= {listing.id}
          description= {listing.description}
          image = {listing.image}
          location= {listing.location}/>
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
