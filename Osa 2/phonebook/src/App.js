
import React, { useState } from 'react'
import './App.css';
import Person from './components/Person'
//import Notification from './components/Notification.js'

const App =(props)=> {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState("") 
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
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
        setNewNumber("");
        return
      }
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
    setNewNumber('')
  }

   //if persons.map(name == {newPerson})
   //alret (`${newName} is already added to phonebook`);
   // else

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterPerson =()=> {
    setFilterPerson(event.target.value)
  }

  return (
    <div className="App">
       <br></br><br></br><br></br>
       <h1>Phonebook</h1>
       <br></br>
       Filter shown with <input value={filterPerson} />
       <form onSubmit={addPerson}>
        <input 
        value={newPerson} 
        onChange={handlePersonChange}
        /><br></br>
        <input 
        value={newNumber} 
        onChange={handleNumberChange}
        />
        <button className="sub" type="submit">save</button>
      </form> 

       <ul>
         {persons.map(person =>
          <Person key={person.id}
           person={person} 
            />
          )}
       </ul>
       <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;

 // <Notification message={errorMessage} />