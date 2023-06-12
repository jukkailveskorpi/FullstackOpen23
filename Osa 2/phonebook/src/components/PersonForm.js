import React from "react";

const PersonForm = ({addPerson, newPerson, handlePersonChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
               name: <input value={newPerson}
                      onChange={handlePersonChange}/> <br/>
               number: <input value={newNumber}
                      onChange={handleNumberChange}/>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm