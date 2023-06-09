
import React, { useState } from 'react'
import './App.css';
import Person from './components/Person'
//import Notification from './components/Notification.js'

const App =(props)=> {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState("") 
  const [errorMessage, setErrorMessage] = useState("")

  const addPerson =(event)=> {
    event.preventDefault()

    if (
       persons.some(
        (persons) => persons.name.toLowerCase() === newPerson.toLowerCase())
    )
       {
        alert (`${newPerson} is already added to phonebook`);
        setNewPerson("");
        return
      }
    const personObject = {
      name: newPerson,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
  }

   //if persons.map(name == {newPerson})
   //alret (`${newName} is already added to phonebook`);
   // else

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  return (
    <div className="App">
   
       <h1>Phonebook</h1>
       <form onSubmit={addPerson}>
        <input 
        value={newPerson} 
        onChange={handlePersonChange}
        />
        <button type="submit">save</button>
      </form> 

       <ul>
         {persons.map(person =>
          <Person key={person.id}
           person={person} 
            />
          )}
       </ul>
      
    </div>
  );
}

export default App;

 // <Notification message={errorMessage} />