import React from 'react';
import { Link } from "react-router-dom";
import "./DogList.css"

/**Accepts the props : dogs
 * 
 * Renders the list of dogs with image and name
 * 
 * App -> DogList -> view(list of dogs)
 */

function DogList(props) {
  const { dogs } = props

  function getDogsList() {
    return (<>
      {dogs.map(dog =>
        <div>
          <div className="DogList-name">
            <Link 
              key={dog.id} 
              to={`/dogs/${dog.name}`}>
                {dog.name}
            </Link>
          </div>
          <img src={dog.src}></img>
        </div>
      )}
    </>)
  }

  return (
    <div className="DogList">
      {getDogsList()}
    </div>
  )
}

export default DogList