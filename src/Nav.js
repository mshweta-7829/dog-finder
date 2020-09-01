import React from 'react';
import { Link } from "react-router-dom";

/** Accepts the props : dogs
 * 
 * renders Nav links to each dog and home page
 * App -> Nav -> view(nav links)
 */

function Nav(props) {
  const { dogs } = props;

  function getNavLinkForAllDogs() {
    return (<>
      {dogs.map(dog => <Link key={dog.id} to={`/dogs/${dog.name}`}>{dog.name}</Link>)}
    </>)
  }
  return (
    <div>
      <div>
        <Link to="/dogs">Home</Link>
        {getNavLinkForAllDogs()}
      </div>
    </div>
  )
}
export default Nav