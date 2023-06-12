
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Persons from './components/Persons'
import Header from './components/Header'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//import Notification from './components/Notification.js'

const App =(props)=> {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState("") 
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  //const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])



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

 const handleFilterChange =(event)=> {
    setFilter (event.target.value)
  } 
    
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
       <div>
       <Persons 
        persons={persons} 
        filter={filter} 
        />
        </div>
       <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;


  /*

 onSubmit={addPerson}>
        //name <input 
        //value={newPerson} 
        //  onChange={handlePersonChange}
        /><br></br>
        number <input 
        //value={newNumber} 
        //onChange={handleNumberChange}
        />
        <button className="sub" type="submit">add</button>
      </form>  

  <ul>
         {persons.filter((person) =>
          person.name.toLowerCase().includes(filter))
                .map((person) => (
                <Person key={person.id}
                 person={person} 
              />
          ))}
       </ul>




        <input 
        type="text" 
        placeholder="Search..." 
        className="search" 
        //value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        //onChange={handlefiltered}
        /> */


 // <Notification message={errorMessage} />

 /*
personsToShow =
		newFilter === ''
			? (personsToShow = persons)
			: (personsToShow = persons.filter(person =>
					person.name.toLowerCase().includes(newFilter.toLowerCase())
			  ))

	<PersonForm
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				persons={persons}
				setPersons={setPersons}
				setMessage={setMessage}
				setMessageType={setMessageType}
				message={message}
			/>
			<h2>Numbers</h2>
			<Persons
				personsToShow={personsToShow}
				setPerson={setPersons}
				handleDelete={handleDelete}
				persons={persons}
			/>
 */