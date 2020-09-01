import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import uuid from "uuid/v4";
import Nav from "./Nav.js"
import DogList from "./DogList.js"
import DogDetails from "./DogDetails.js"
import duke from "./images/duke.jpg"
import perry from "./images/perry.jpg"
import tubby from "./images/tubby.jpg"
import whiskey from "./images/whiskey.jpg"

/** Accepts props : dogs: [
*                           {
*                              name: "Whiskey",
*                              age: 5,
*                              src: whiskey,
*                              facts: [
*                                "Whiskey loves eating popcorn.",
*                              ]
*                            }, ... 
*                        ]
* Defines two routes :
*                      1."/dogs"
*                      2."/dogs/:name"
*                      for rest of the other routes redirect to "/dogs"
*   
* App -> Nav          
*/

//Todo: Ask How to send single dog information as prop to DogDetails
function App(props) {
  const { dogs } = props
  
  function giveDogsId(){
    return dogs.map(dog => (
      { ...dog, id: uuid() }
    ))
  }
  
  const [dogList, setDogList] = useState(giveDogsId)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogList} />
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogList} />
          </Route>
          <Route path="/dogs/:name" >
            <DogDetails dogs={dogList} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
