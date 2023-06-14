
import React, { useState, useEffect } from 'react'
import './App.css';
import Persons from './components/Persons'
import Header from './components/Header'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>


const App =()=> {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState("") 
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const addPerson = (event) => {
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
    }
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewPerson('')
        setNewNumber('')
      })
    
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  } 

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 

 const handleFilterChange =(event)=> {
    setFilter (event.target.value)
  } 

 
 const deletePerson = (id) => {
  const person = persons.find((person) => person.id === id);
  const confirmation = window.confirm(`Delete ${person.name}?`);
       if(confirmation) {

        personService
        .deletePerson(id)
        .then(() => {
        setPersons(persons.filter((person) => person.id !== id)); 
 });
}
}; 
    
  return (
    <div className="App">
       <br></br><br></br><br></br>
       <div>
       <Header />
       </div>
       <br></br>
        <div>
        <Filter 
         setFilter={setFilter} 
         handleFilterChange={handleFilterChange}
        />
        </div>
       <br></br>
       <div>
       <PersonForm 
        addPerson={addPerson}
        newPerson={newPerson}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
       />
       </div>
       <React.StrictMode>
       <div>
       <Persons 
        persons={persons} 
        filter={filter} 
        deletePerson={deletePerson}
        />
        </div>
        </React.StrictMode>
       <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;

