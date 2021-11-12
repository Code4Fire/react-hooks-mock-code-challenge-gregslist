import React, {useState} from "react";

function ListingCard({cardId, description, image, location, removeListing}) {
  const [favorited, setFavorited] = useState(false);
  const favoritedClass = favorited ? "active" : "";
  const favoritedStar = favorited ? "★" : "☆";

  function handleFavoritedClick() {
    setFavorited(!favorited);
  }
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${cardId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
      removeListing(cardId);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className={"emoji-button favorite " + favoritedClass} onClick={handleFavoritedClick}>{favoritedStar}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick= {handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
