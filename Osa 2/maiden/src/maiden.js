import axios from 'axios';

const baseUrl = 'http://v6.exchangerate-api.com/v6/';

const getAll =()=> {
  const request = axios.get(baseUrl)
  return request.then(response => response.data);
}

/*const create = (personObject) => {
  const request = axios.post(baseUrl, personObject)
  return request.then(response => response.data);
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data);
};

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}*/

export default { getAll }; 
