import './App.css'
import ContactList from "./components/ContactList"
import { useState } from 'react';


export default function App() {
const [selectedContactId,setselectedContactId]= useState(null)
  console.log("selectedContactId",selectedContactId);
  return(
<>
{selectedContactId ? <h1>Selected Contact View</h1>:null }

<ContactList
setselectedContactId={setselectedContactId}
/>
</>
  );
}
