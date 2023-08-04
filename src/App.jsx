import { useState } from 'react'
import dummyContacts from './components/ContactList'
import './App.css'

function App() {
  const[contacts,setContacts]=useState(dummyContacts);
  console.log("contacts:",contacts);


  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
      </tbody>
    </table>
 
    </>
  )
}

export default App
