import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const getPlants= plants.map(plant => {
    return(
      <PlantCard {...plant} key={plant.id}/>
    )
  })
  return (
    <ul className="cards">{getPlants}</ul>
  );
}

export default PlantList;
