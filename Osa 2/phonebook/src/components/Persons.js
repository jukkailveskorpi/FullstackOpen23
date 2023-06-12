import React from 'react';
import Person from './Person'

const Persons = (props) => {

    const persons = props.persons
    const filter = props.filter

    return (
        <div>
            {persons.filter((person) =>
                person.name.toLowerCase().includes(filter))
                    .map((person) => (
                    <Person person = {person} 
                    key={person.id} />)) 
                    }
        </div>
    )
}
  
  export default Persons