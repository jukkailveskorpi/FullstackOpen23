
import React, { useState } from 'react'
import './App.css';
import Person from './components/Person'
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//import Notification from './components/Notification.js'

const App =(props)=> {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState("") 
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  //const [errorMessage, setErrorMessage] = useState("")

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

 /* const handlefiltered =(event)=> {
    setFilter (event.target.value)
  } */ 
    
  return (
    <div className="App">
       <br></br><br></br><br></br>
       <h1>Phonebook</h1>
       <br></br>

       Filter shown with 
        <div>
        <input 
        type="text" 
        placeholder="Search..." 
        className="search" 
        //value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        //onChange={handlefiltered}
        />
       </div>
      
       <br></br>
       <form onSubmit={addPerson}>
        Name <input 
        value={newPerson} 
        onChange={handlePersonChange}
        /><br></br>
        Number <input 
        value={newNumber} 
        onChange={handleNumberChange}
        />
        <button className="sub" type="submit">save</button>
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
       <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;

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