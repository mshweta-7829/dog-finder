import React from 'react';
import { Link } from "react-router-dom";

/**Accepts the props : dogs
 * 
 * Renders the list of dogs with image and name
 * 
 * App -> DogList -> view(list of dogs)
 */

function DogList(props) {
  const { dogs } = props

  function getDogsList() {
    return (<ul>
      {dogs.map(dog =>
        <li>
          <Link key={dog.id} to={`/dogs/${dog.name}`}>{dog.name}</Link><br></br>
          <img src={dog.src}></img>
        </li>
      )}
    </ul>)
  }

  return (
    <div className="DogList">
      {getDogsList()}
    </div>
  )
}

export default DogList