import React from 'react';
import { useParams } from "react-router-dom";
import "./DogDetails.css"


/**Accepts the props : dogs
 * 
 * Gets the one dog object whose name matches with url param
 * And renders details of this single dog
 * App -> DogDetails -> view (details of dog)
 */

function DogDetails(props) {
  const { dogs } = props
  const { name } = useParams();

  //use .find
  let dog = dogs.filter(dog => dog.name === name)[0]


  function getFacts() {
    return (
      <>
        {dog.facts.map(fact =>
          <li>{fact}</li>)}
      </>
    )
  }

  return (
    <div className="DogDetails">
      <div className="DogDetails-name">Name : {dog.name}</div>
      <img src={dog.src}></img>
      <div> Age : {dog.age}</div>
      <ul> Facts :
      {getFacts()}
      </ul>
    </div>
  )
}

export default DogDetails