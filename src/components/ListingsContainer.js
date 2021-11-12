import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  return (
    <main>
      <ul className="cards">
      {listings.map((listing) => {
          return <ListingCard
          key= {listing.id}
          cardId= {listing.id}
          description= {listing.description}
          image = {listing.image}
          location= {listing.location}
          removeListing={removeListing} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
