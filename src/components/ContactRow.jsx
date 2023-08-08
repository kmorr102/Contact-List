/*eslint-disable react/prop-types*/
const ContactRow = ({setselectedContactId,contact}) => {
    return ( 
        <>
        <tr onClick={()=>setselectedContactId(contact.id)}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
        </>
    );
}
export default ContactRow;