import './App.css'
import ContactList from "./components/ContactList"
import { useState } from 'react';


export default function App() {
const [selectedContactId,setSelectedContactId] =useState (null)
  return(
<>
{selectedContactId ? <h1>Selected contact view</h1>:null }

<ContactList
setSelectedContactId={setSelectedContactId}
/>
</>
  );
}
